import { CookiesInfo } from "@/src/shared/api/types/cookiesInfo";
import { getCookie, setCookie } from "cookies-next";

export const useSetStage = () => {
  const expirationStr = getCookie(CookiesInfo.REFRESH_TOKEN_EXPIRES) as
    | string
    | undefined;

  let refreshTokenExpiration: Date | undefined;
  
  if (expirationStr) {
    refreshTokenExpiration = new Date(expirationStr);
  }

  const setStage = (stage: "1" | "2" | "3") => {
    setCookie(CookiesInfo.COMPLETED_STAGE, stage, {
      expires: refreshTokenExpiration,
    });
  };

  return { setStage };
};
