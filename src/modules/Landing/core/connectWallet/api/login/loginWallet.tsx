import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";

export const useLoginWallet = () => {
  const loginMutation = useMutation({
    mutationKey: ["login_wallet"],
    mutationFn: async ({
      wallet_address,
    }: {
      wallet_address: string | undefined;
    }) => {
      const response = await api.post<{ nonce: string }>("/auth/login/", {
        wallet_address: wallet_address,
      });
      return response.data;
    },
  });

  return {
    loginMutation,
  };
};
