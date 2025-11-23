import { ESellMethod } from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";

export interface SellModeButton {
  id: number;
  label: string;
  value: ESellMethod;
}

export const useSellModeButtons = () => {
  const sellModeButtons: SellModeButton[] = [
    {
      id: 1,
      label: "Copy Sell",
      value: ESellMethod.COPY_SELL,
    },
    // {
    //   id: 2,
    //   label: "Fixed Ration",
    //   value: ESellMethod.SELL_ALL,
    // },
    {
      id: 3,
      label: "Sell All",
      value: ESellMethod.SELL_ALL,
    },
    {
      id: 4,
      label: "Not Sell",
      value: ESellMethod.NOT_SELL,
    },
  ];

  return {
    sellModeButtons,
  };
};
