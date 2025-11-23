import { formatMoney } from "@/src/shared/functions/format/format-money";
import styles from "./BalanceBlock.module.css";

interface BalanceBlockProps {
  totalValue: number;
  unrealizedPNL: number;
  winRate: number;
  availableBalance: number;
}

export const BalanceBlock = ({
  totalValue,
  unrealizedPNL,
  winRate,
  availableBalance,
}: BalanceBlockProps) => {
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balanceSection}>
        <h3 className={styles.sectionTitle}>Balance</h3>
        <div className={styles.balanceItems}>
          <div className={styles.balanceItem}>
            <span className={styles.balanceLabel}>Total Value</span>
            <span className={styles.balanceValue}>
              {formatMoney({ money: totalValue })}
            </span>
          </div>
          <div className={styles.balanceItem}>
            <span className={styles.balanceLabel}>Unrealized PNL</span>
            <span
              className={`${styles.balanceValue} ${unrealizedPNL >= 0 ? styles.positive : styles.negative}`}
            >
              {unrealizedPNL >= 0 ? "+" : ""}
              {formatMoney({ money: unrealizedPNL })}
            </span>
          </div>
          <div className={styles.balanceItem}>
            <span className={styles.balanceLabel}>Win Rate</span>
            <span className={styles.balanceValue}>{winRate.toFixed(2)}%</span>
          </div>
          <div className={styles.balanceItem}>
            <span className={styles.balanceLabel}>Available Balance</span>
            <span className={styles.balanceValue}>
              {formatMoney({ money: availableBalance })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
