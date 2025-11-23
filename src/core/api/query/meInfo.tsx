"use client";

import api from "@/src/shared/api/api";
import { CookiesInfo } from "@/src/shared/api/types/cookiesInfo";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

interface MeInfoResponse {
  id: number;
  wallet_address: string;
  internal_wallet_address: string;
  private_key_shown: boolean;
  allowance_set: boolean;
  created_at: string;
  updated_at: string;
  last_login_at: string;
}

export const useMeInfo = () => {
  const accessToken = getCookie(CookiesInfo.ACCESS_TOKEN);
  
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await api.get<MeInfoResponse>("/users/me/");
      return response.data;
    },
    enabled: !!accessToken,
  });
};
