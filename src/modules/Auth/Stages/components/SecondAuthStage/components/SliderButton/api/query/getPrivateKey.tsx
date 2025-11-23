import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPrivateKey = ({ enabled = false }: { enabled: boolean }) => {
  return useQuery({
    queryKey: ["get_private_key"],
    queryFn: async () => {
      const response = await api.get<{ private_key: string }>(
        "/users/private-key/",
      );
      return response.data;
    },
    enabled,
  });
};
