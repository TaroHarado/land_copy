import { setCookie } from "cookies-next";
import { authTypeReturn, CookiesInfo } from "../types/cookiesInfo";

interface ISetAuthCookies {
  accessToken: authTypeReturn["access_token"];
  refreshToken: authTypeReturn["refresh_token"];
  accessExpiration: authTypeReturn["access_token_expires_in"];
  refreshExpiration: authTypeReturn["refresh_token_expires_in"];
}

export const setAuthCookies = ({
  accessToken,
  refreshToken,
  accessExpiration,
  refreshExpiration,
}: ISetAuthCookies) => {
  const access_expiration = new Date(Date.now() + accessExpiration * 1000);
  const refresh_expiration = new Date(Date.now() + refreshExpiration * 1000);

  setCookie(CookiesInfo.ACCESS_TOKEN, accessToken, {
    expires: access_expiration,
  });

  setCookie(CookiesInfo.REFRESH_TOKEN, refreshToken, {
    expires: refresh_expiration,
  });

  setCookie(
    CookiesInfo.REFRESH_TOKEN_EXPIRES,
    refresh_expiration.toISOString(),
    {
      expires: refresh_expiration,
    },
  );
};
