import { TokenDistribution } from "@/src/modules/User/LeaderDashboard/components/MainInfoBlock/api/query/getLeaderBoard";
import { formatCompactMoney } from "@/src/shared/functions/format/format-compact-money";
import { classNames } from "@/src/shared/lib";
import { usePerfomance } from "../mock/usePerfomance";
import styles from "./Perfomance.module.css";

interface PerfomanceProps {
  sevenDayUnrealizedPNL: number;
  sevenDayRealizedPNL: number;
  sevenDayTransactions: { total: number; wins: number; losses: number };
  performanceBreakdown: TokenDistribution;
}

export const Perfomance = ({
  sevenDayUnrealizedPNL,
  sevenDayRealizedPNL,
  sevenDayTransactions,
  performanceBreakdown,
}: PerfomanceProps) => {
  const { defaultPerformanceBreakdown } = usePerfomance({
    performanceBreakdown,
  });

  const totalCount = defaultPerformanceBreakdown.reduce(
    (sum, item) => sum + (item.count || 0),
    0,
  );

  return (
    <div className={styles.container}>
      <div className={styles.performanceSection}>
        <h3 className={styles.sectionTitle}>Performance</h3>
        <div className={styles.performanceContent}>
          <div className={styles.performanceMetrics}>
            <div className={styles.metricItem}>
              <span className={styles.metricInfo}>7d Unrealized PNL</span>
              <span
                className={classNames(
                  styles.metricInfo,
                  sevenDayUnrealizedPNL >= 0
                    ? styles.positive
                    : styles.negative,
                )}
              >
                {sevenDayUnrealizedPNL >= 0 ? "" : "-"}
                {formatCompactMoney({ money: sevenDayUnrealizedPNL })}
              </span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricInfo}>7d Realized PNL</span>
              <span
                className={classNames(
                  styles.metricInfo,
                  sevenDayRealizedPNL >= 0 ? styles.positive : styles.negative,
                )}
              >
                {formatCompactMoney({ money: sevenDayRealizedPNL })}
              </span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricInfo}>7d TXNS</span>
              <div className={styles.metricInfoTransactions}>
                <span className={styles.metricInfo}>
                  {sevenDayTransactions.total}
                </span>
                <div className={styles.metricInfoTransactionsCount}>
                  <p
                    className={classNames(styles.metricValue, styles.positive)}
                  >
                    {sevenDayTransactions.wins}
                  </p>
                  <span className={styles.metricInfo}>/</span>
                  <p
                    className={classNames(styles.metricValue, styles.negative)}
                  >
                    {sevenDayTransactions.losses}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.performanceBreakdown}>
            {defaultPerformanceBreakdown.map((item, index) => (
              <div key={index} className={styles.breakdownItem}>
                <div className={styles.breakdownHeader}>
                  <div className={styles.breakdownHeaderContent}>
                    <div
                      className={styles.colorCircle}
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={styles.breakdownRange}>{item.range}</span>
                  </div>
                  <span className={styles.breakdownCount}>{item.count}</span>
                </div>
              </div>
            ))}
            <div className={styles.breakdownBar}>
              {[...defaultPerformanceBreakdown].reverse().map((item, index) => {
                const width =
                  totalCount > 0 ? ((item.count || 0) / totalCount) * 100 : 0;
                return (
                  <div
                    key={`segment-${index}`}
                    className={styles.breakdownBarSegment}
                    style={{
                      width: `${width}%`,
                      backgroundColor: item.color,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
