import {
  NotificationType,
  useNotificationContext,
} from "@/src/app/providers/NotificationProvider";
import { useForm } from "react-hook-form";
import { useStartMonitoring } from "../api/mutate/startMonitoring";

export enum ESellMethod {
  COPY_SELL = "COPY_SELL",
  NOT_SELL = "NOT_SELL",
  SELL_ALL = "SELL_ALL",
}

export enum EBuyMethod {
  MAX_BUY_AMOUNT = "MAX_AMOUNT",
  FIXED_BUY = "FIXED_AMOUNT",
  FIXED_RATIO = "RATIO",
}

export interface IUseCopyTradingForm {
  target_address: string;
  buy_amount: number | null;
  buy_ratio: number | null;
  buy_max_amount: number | null;
  sell_mode: ESellMethod;
  copy_mode: EBuyMethod | null;
  slippage_bps: string;
  priority_fee_gwei: string;
}

export const useCopyTradingForm = ({ onClose }: { onClose: () => void }) => {
  const { startMonitoringMutation } = useStartMonitoring();
  const { addNotification } = useNotificationContext();

  const copyTradingForm = useForm<IUseCopyTradingForm>({
    defaultValues: {
      target_address: "",
      buy_amount: null,
      buy_ratio: null,
      buy_max_amount: null,
      sell_mode: ESellMethod.COPY_SELL,
      copy_mode: EBuyMethod.MAX_BUY_AMOUNT,
      slippage_bps: "",
      priority_fee_gwei: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: IUseCopyTradingForm) => {
    startMonitoringMutation.mutate(data, {
      onSuccess: () => {
        addNotification({
          message: "Monitoring started successfully",
          type: NotificationType.SUCCESS,
        });
        onClose();
        copyTradingForm.reset();
      },
      onError: () => {
        addNotification({
          message: "Something went wrong",
          type: NotificationType.ERROR,
        });
      },
    });
  };

  return { copyTradingForm, onSubmit, ...copyTradingForm };
};
