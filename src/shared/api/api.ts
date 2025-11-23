import axios from "axios";
import { getCookie } from "cookies-next";
import { removeCookies } from "./functions/removeCookies";
import { setAuthCookies } from "./functions/setAuthCookies";
import { authTypeReturn, CookiesInfo } from "./types/cookiesInfo";

export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(CookiesInfo.ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  () => console.log("Ошибка при отправке запроса"),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      error.response.data.error === "error.auth.token_not_provided"
    ) {
      originalRequest._retry = true;

      const refreshToken = getCookie(CookiesInfo.REFRESH_TOKEN);

      if (!refreshToken) {
        removeCookies();
        window.location.reload();
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post<authTypeReturn>(
          `${API_BASE_URL}/auth/refresh-token/`,
          {
            refresh_token: refreshToken,
          },
        );

        setAuthCookies({
          accessExpiration: data.access_token_expires_in,
          accessToken: data.access_token,
          refreshExpiration: data.refresh_token_expires_in,
          refreshToken: data.refresh_token,
        });

        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

        return api(originalRequest);
      } catch (refreshError) {
        removeCookies();
        window.location.reload();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
