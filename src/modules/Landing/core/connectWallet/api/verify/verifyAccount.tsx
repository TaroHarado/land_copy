"use client";

import {
  NotificationType,
  useNotificationContext,
} from "@/src/app/providers/NotificationProvider";
import api from "@/src/shared/api/api";
import { setAuthCookies } from "@/src/shared/api/functions/setAuthCookies";
import { authTypeReturn } from "@/src/shared/api/types/cookiesInfo";
import { useMutation } from "@tanstack/react-query";
import { useDisconnect } from "wagmi";

export const useVerifyAccount = ({ onClose }: { onClose: () => void }) => {
  const { disconnect } = useDisconnect();
  const { addNotification } = useNotificationContext();

  const verifyAccountMutation = useMutation({
    mutationKey: ["verify_account"],
    mutationFn: async ({
      wallet_address,
      signature,
    }: {
      wallet_address: `0x${string}` | undefined;
      signature: string;
    }) => {
      const response = await api.post<authTypeReturn>("/auth/verify", {
        wallet_address,
        signature,
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

      disconnect();
      addNotification({
        message: "Account verified successfully",
        type: NotificationType.SUCCESS,
      });
      onClose();
    },
    onError: () => {
      addNotification({
        message: "Something went wrong",
        type: NotificationType.ERROR,
      });
    },
  });

  return {
    verifyAccountMutation,
  };
};
