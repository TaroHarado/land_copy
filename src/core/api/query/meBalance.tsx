import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

interface IMeBalance {
  address: string;
  usdc_balance: number;
  usdce_balance: number;
  total_balance: number;
}

export const useMeBalance = () => {
  return useQuery({
    queryKey: ["meBalance"],
    queryFn: async () => {
      const response = await api.get<IMeBalance>("/users/balance");
      return response.data;
    },
  });
};
