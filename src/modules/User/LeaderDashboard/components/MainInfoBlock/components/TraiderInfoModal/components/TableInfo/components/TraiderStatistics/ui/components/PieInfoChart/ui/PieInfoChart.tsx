import { TokenDistribution } from "@/src/modules/User/LeaderDashboard/components/MainInfoBlock/api/query/getLeaderBoard";
import { formatNumber } from "@/src/shared/functions/format/format-number";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { usePieInfoChart } from "../mock/usePieInfoChart";
import styles from "./PieInfoChart.module.css";

interface PieInfoChartProps {
  tokenDistribution?: TokenDistribution;
}

export const PieInfoChart = ({ tokenDistribution }: PieInfoChartProps) => {
  const { mostTradedMarkets: defaultMarkets } = usePieInfoChart();

  let mostTradedMarkets = defaultMarkets;
  if (tokenDistribution) {
    const colors = ["#00963C", "#BF4949", "#6166FF", "#FFA500"];
    mostTradedMarkets = Object.entries(tokenDistribution)
      .filter(([_, value]) => value !== undefined && value > 0)
      .map(([key, value], index) => ({
        name: key,
        trades: value || 0,
        color: colors[index % colors.length],
      }));
  }

  return (
    <div className={styles.marketsSection}>
      <h3 className={styles.sectionTitle}>Most Traded Markets</h3>
      <div className={styles.donutChartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <filter id="round-corner">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
            </defs>

            <Pie
              data={mostTradedMarkets}
              cx="50%"
              cy="50%"
              innerRadius={84}
              paddingAngle={4}
              cornerRadius={15}
              dataKey="trades"
              stroke="transparent"
            >
              {mostTradedMarkets.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-black-1)",
                fontSize: "14px",
                borderRadius: "8px",
                fontWeight: "500",
                fontFamily: "var(--font-inter)",
                color: "var(--color-white)",
                border: "1px solid var(--color-black-4)",
                zIndex: 10000,
              }}
              wrapperStyle={{
                zIndex: 10000,
              }}
              itemStyle={{
                color: "var(--color-white)",
              }}
              formatter={(value: number) => `${value} trades`}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.donutTotal}>
          <p className={styles.donutTotalValue}>
            {formatNumber(
              mostTradedMarkets.reduce((sum, market) => sum + market.trades, 0),
            )}
          </p>
          <p className={styles.donutTotalValue}>Total trades</p>
        </div>
      </div>
      <div className={styles.marketsLegend}>
        {mostTradedMarkets.map((market, index) => (
          <div key={index} className={styles.legendItem}>
            <div className={styles.legendItemContent}>
              <div
                className={styles.legendCircle}
                style={{ backgroundColor: market.color }}
              />
              <span className={styles.legendName}>{market.name}</span>
            </div>
            <span className={styles.legendCount}>{market.trades} trades</span>
          </div>
        ))}
      </div>
    </div>
  );
};
