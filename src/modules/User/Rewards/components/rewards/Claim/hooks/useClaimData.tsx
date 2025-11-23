import chartIcon from "@/public/icons/icons-with-bg/chart.svg";
import diamondIcon from "@/public/icons/icons-with-bg/diamond.svg";
import starIcon from "@/public/icons/icons-with-bg/star.svg";
import coinIcon from "@/public/icons/coin.svg";
import logoIcon from "@/public/icons/logo/logo.svg";

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface ClaimRewardItem {
  id: string;
  icon: string;
  value: string;
  iconType: "dollar" | "hexagon";
}

export interface QuestItem {
  id: string;
  progress: number;
  value: string;
  label: string;
}

export const useClaimData = () => {
  const claimData = {
    usdcRewards: {
      title: "USDC Rewards",
      icon: chartIcon,
      chartData: [
        { date: "Oct 10", value: 50 },
        { date: "Oct 11", value: 55 },
        { date: "Oct 12", value: 60 },
        { date: "Oct 13", value: 65 },
        { date: "Oct 14", value: 70 },
        { date: "Oct 15", value: 75 },
        { date: "Oct 16", value: 80 },
        { date: "Oct 17", value: 85 },
      ],
    },
    claim: {
      title: "Claim",
      icon: diamondIcon,
      rewards: [
        {
          id: "1",
          value: "+ 0.650",
          icon: coinIcon,
        },
        {
          id: "2",
          value: "+ 0",
          icon: logoIcon,
        },
      ],
      buttonText: "Claim USDC",
    },
    quests: {
      leftTitle: "Quests",
      rightTitle: "Points Breakdown",
      icon: starIcon,
      items: [
        {
          id: "1",
          progress: 5,
          value: "+1,500",
          label: "Refer 3 more people",
        },
        {
          id: "2",
          progress: 75,
          value: "+200,000",
          label: "Trade 1000 more USDC in Volume",
        },
        {
          id: "3",
          progress: 90,
          value: "+20,000",
          label: "Make 1000 more transactions",
        },
      ],
    },
  };

  return {
    claimData,
  };
};
