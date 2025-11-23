import { classNames } from "@/src/shared/lib";
import { TokenDistribution as ITokenDistribution } from "../../../api/query/getLeaderBoard";
import styles from "./TokenDistribution.module.css";

interface TokenDistributionProps {
  data: ITokenDistribution;
  className?: string;
}

export const TokenDistribution = ({
  data,
  className,
}: TokenDistributionProps) => {
  const items = [
    {
      key: ">500",
      label: ">500%",
      value: data[">500"] ?? 0,
      isPositive: true,
    },
    {
      key: "0-500",
      label: "0-500%",
      value: data["0-500"] ?? 0,
      isPositive: true,
    },
    {
      key: "<-50",
      label: "<-50%",
      value: data["<-50"] ?? 0,
      isPositive: false,
    },
    {
      key: ">-50",
      label: ">-50%",
      value: data[">-50"] ?? 0,
      isPositive: false,
    },
  ];

  return (
    <div className={classNames(styles.container, className)}>
      {items.map((item) => (
        <div key={item.key} className={styles.item}>
          <p
            className={classNames(
              styles.value,
              item.isPositive ? styles.valuePositive : styles.valueNegative,
            )}
          >
            {item.value}
          </p>
          <p className={styles.label}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};
