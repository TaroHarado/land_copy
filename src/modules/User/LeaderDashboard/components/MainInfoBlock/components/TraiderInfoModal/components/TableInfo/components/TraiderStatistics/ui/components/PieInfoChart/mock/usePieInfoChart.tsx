export const usePieInfoChart = () => {
  const mostTradedMarkets = [
    { name: "Politics", trades: 35, color: "#00963C" },
    { name: "Sport", trades: 35, color: "#BF4949" },
    { name: "Crypto", trades: 35, color: "#6166FF" },
  ];

  const totalTrades = mostTradedMarkets.reduce(
    (sum, market) => sum + market.trades,
    0,
  );

  return { mostTradedMarkets, totalTrades };
};
