"use client";

import { IEntry, TokenDistribution } from "@/src/modules/User/LeaderDashboard/components/MainInfoBlock/api/query/getLeaderBoard";
import styles from "./TraiderStatistics.module.css";
import {
  BalanceBlock,
  Perfomance,
  PieInfoChart,
  TradingViewBaselineChart,
} from "./components";

interface TraiderStatisticsProps {
  activeUser: IEntry;
  totalValue?: number;
  unrealizedPNL?: number;
  winRate?: number;
  availableBalance?: number;
  pnlData?: Array<{
    date: string;
    value: number;
    negative: number | null;
    positive: number | null;
  }>;
  sevenDayUnrealizedPNL?: number;
  sevenDayRealizedPNL?: number;
  sevenDayTransactions?: { total: number; wins: number; losses: number };
  performanceBreakdown?: Array<{
    range: string;
    count: number;
    color: string;
  }>;
  mostTradedMarkets?: Array<{ name: string; trades: number; color: string }>;
}

export const TraiderStatistics = ({ activeUser }: TraiderStatisticsProps) => {
  const winRate = activeUser.winrate_7d;
  const totalValue =
    activeUser.avg_cost_7d * activeUser.total_trades || activeUser.avg_cost_7d;

  const unrealizedPNL = activeUser.pnl_1d;
  const availableBalance = activeUser.avg_cost_7d;
  const sevenDayUnrealizedPNL = activeUser.pnl_1d;
  const sevenDayRealizedPNL = activeUser.pnl_7d;
  
  const sevenDayTransactions = {
    total: activeUser.total_trades,
    wins: activeUser.wins_7d,
    losses: activeUser.losses_7d,
  };

  const performanceBreakdown: TokenDistribution = {
    ">500": activeUser.token_distribution_7d[">500"],
    "0-500": activeUser.token_distribution_7d["0-500"],
    ">-50": activeUser.token_distribution_7d[">-50"],
    "<-50": activeUser.token_distribution_7d["<-50"],
  }

  return (
    <div className={styles.container}>
      <BalanceBlock
        totalValue={totalValue}
        unrealizedPNL={unrealizedPNL}
        winRate={winRate}
        availableBalance={availableBalance}
      />
      <TradingViewBaselineChart dailyProfitData={activeUser.daily_profit_7d} />
      <Perfomance
        sevenDayUnrealizedPNL={sevenDayUnrealizedPNL}
        sevenDayRealizedPNL={sevenDayRealizedPNL}
        sevenDayTransactions={sevenDayTransactions}
        performanceBreakdown={performanceBreakdown}
      />
      <PieInfoChart tokenDistribution={activeUser.token_distribution_7d} />
    </div>
  );
};
