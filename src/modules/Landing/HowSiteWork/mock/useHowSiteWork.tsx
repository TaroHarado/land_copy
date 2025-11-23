import copytradingIcon from "@/public/icons/big-images/how-site-work/first.svg";
import arbitrageAndSpreadsIcon from "@/public/icons/big-images/how-site-work/fourth.svg";
import pointSystemIcon from "@/public/icons/big-images/how-site-work/second.svg";
import realTimeWalletTrackingIcon from "@/public/icons/big-images/how-site-work/third.svg";

export const useHowSiteWork = () => {
  const howSiteWork = [
    {
      title: "Copytrading in one click",
      description:
        "Mirror the best Polymarket traders automatically, with full control over limits and slippage",
      icon: copytradingIcon,
      borderPosition: "r",
    },
    {
      title: "Point system",
      description:
        "Earn weekly rewards for trading volume, referrals, and early participation",
      icon: pointSystemIcon,
      borderPosition: "b",
    },
    {
      title: "Real-time wallet tracking",
      description:
        "Track top traders, get alerts, and copy their trades automatically",
      icon: realTimeWalletTrackingIcon,
      borderPosition: "t",
    },
    {
      title: "Arbitrage & spreads",
      description: "Catch pricing gaps across markets before they close",
      icon: arbitrageAndSpreadsIcon,
      borderPosition: "l",
    },
  ];

  return { howSiteWork };
};
