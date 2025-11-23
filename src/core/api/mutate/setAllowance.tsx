import api from "@/src/shared/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSetAllowance = () => {
  const queryClient = useQueryClient();

  const setAllowance = useMutation({
    mutationKey: ["set_allowance"],
    mutationFn: async () => {
      const response = await api.post<{ allowance: number }>(
        "/users/set-allowance",
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  return { setAllowance };
};
