import { deleteCookie } from "cookies-next";
import { allCookies } from "../const/allCookies";
import { CookiesInfo } from "../types/cookiesInfo";

export const removeCookies = () => {
  allCookies.forEach((cookie: CookiesInfo) => {
    deleteCookie(cookie);
  });
};
