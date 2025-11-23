import api from "@/src/shared/api/api";
import { setAuthCookies } from "@/src/shared/api/functions/setAuthCookies";
import {
  authTypeReturn,
  CookiesInfo,
} from "@/src/shared/api/types/cookiesInfo";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export const useRefreshTokens = () => {
  const refreshTokensMutation = useMutation({
    mutationKey: ["refresh_tokens"],
    mutationFn: async () => {
      const response = await api.post<authTypeReturn>("/auth/refresh-token/", {
        refresh_token: getCookie(CookiesInfo.REFRESH_TOKEN),
      });
      return response.data;
    },
    onSuccess: (data) => {
      setAuthCookies({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        accessExpiration: data.access_token_expires_in,
        refreshExpiration: data.refresh_token_expires_in,
      });
    },
  });

  return {
    refreshTokensMutation,
  };
};
