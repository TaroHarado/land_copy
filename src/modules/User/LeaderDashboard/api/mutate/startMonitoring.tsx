import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { IUseCopyTradingForm } from "../../hooks/useCopyTradingForm";

export const useStartMonitoring = () => {
  const startMonitoringMutation = useMutation({
    mutationKey: ["startMonitoring"],
    mutationFn: async (data: IUseCopyTradingForm) => {
      const requestData: Record<string, any> = {
        target_address: data.target_address,
        sell_mode: data.sell_mode,
        copy_mode: data.copy_mode ?? "",
      };

      console.log(data.buy_amount)

      if (data.buy_amount !== null) {
        requestData.buy_amount = Number(data.buy_amount);
      } 

      if (data.buy_ratio) {
        requestData.buy_ratio = Number(data.buy_ratio);
      }

      if (data.buy_max_amount) {
        requestData.buy_max_amount = Number(data.buy_max_amount);
      }

      if (data.slippage_bps !== "") {
        requestData.slippage_bps = Number(data.slippage_bps);
      }

      if (data.priority_fee_gwei !== "") {
        requestData.priority_fee_gwei = data.priority_fee_gwei;
      }

      const response = await api.post("/monitoring/start", requestData);
      return response.data;
    },
  });

  return {
    startMonitoringMutation,
  };
};
