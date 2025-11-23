import { EBuyMethod } from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";
import { useState } from "react";

export interface copyTradingStrategyMock {
  id: number;
  name: string;
  description: string;
  mode: EBuyMethod;
}

export const useCopyTradingStrategyMock = () => {
  const [hoveredItem, setHoveredItem] = useState<EBuyMethod | null>(null);

  const copyTradingStrategyMock: copyTradingStrategyMock[] = [
    {
      id: 1,
      name: "Max Buy Amount",
      description:
        "If the target's buy amount exceeds the max, copy buy at the max. Otherwise, follow the target's buy amount. The max buy is 1 SQL. When target address buys 0.5 SQL, the user buy 0.5 SQL. If the target address buys 2 SQL, user buy 1 SQL.",
      mode: EBuyMethod.MAX_BUY_AMOUNT,
    },
    {
      id: 2,
      name: "Fixed buy",
      description:
        "No matter how much the target address buys, copy buy order will be made according to the fixed amount.",
      mode: EBuyMethod.FIXED_BUY,
    },
    {
      id: 3,
      name: "Fixed Ratio",
      description:
        "Buy % & Total ratio: 120% means 1.2 times the copied order. It won't exceed your set Max Buy Amount. E.g. Enter 200% Max Buy Amount is 0.5 SQL. If copied wallet buys 0.1 SQL, you buy 0.2 SQL. If it buys 0.3 SQL, you buy 0.5 SQL.",
      mode: EBuyMethod.FIXED_RATIO,
    },
  ];

  const currentItem = copyTradingStrategyMock.find(
    (item) => item.mode === hoveredItem,
  );

  return { copyTradingStrategyMock, hoveredItem, setHoveredItem, currentItem };
};
