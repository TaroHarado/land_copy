import CopyIcon from "@/public/icons/copy.svg?comp";
import LikeIcon from "@/public/icons/like.svg?comp";
import whiteWalletIcon from "@/public/icons/white-wallet.svg";
import { formatCompactMoney } from "@/src/shared/functions/format/format-compact-money";
import { formatDate } from "@/src/shared/functions/format/format-date";
import { useCopyText } from "@/src/shared/hooks/useCopyText";
import { classNames } from "@/src/shared/lib";
import { ITableColumn } from "@/src/shared/ui/Table";
import Image from "next/image";
import { useLeaderDashboardContext } from "../../../context";
import {
  IEntry,
  TokenDistribution as ITokenDistribution,
} from "../api/query/getLeaderBoard";
import { DailyProfitChart, TokenDistribution } from "../components";
import styles from "../mock/styles/Table.module.css";

interface ITableInfo {
  leaderBoardEntries: IEntry[];
}

export const useTableInfo = ({ leaderBoardEntries }: ITableInfo) => {
  const { handleCopyText } = useCopyText();

  const { copyTradingForm, setOpenCopyTrading } = useLeaderDashboardContext();

  const columns: ITableColumn[] = [
    {
      key: "wallet",
      title: "Wallet",
      align: "start",
      render: (value) => (
        <div className={styles.walletContainer}>
          <p className={styles.wallet}>{value}</p>
          <div className={styles.walletIcons}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopyText(value);
              }}
            >
              <LikeIcon width={20} height={20} className={styles.likeIcon} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopyText(value);
              }}
            >
              <CopyIcon width={16} height={16} className={styles.copyIcon} />
            </button>
          </div>
        </div>
      ),
      cellClassName: "min-w-[230px]",
      headerClassName: "min-w-[230px]",
    },
    {
      key: "1DPNL",
      title: "1D PNL",
      render: (value) => {
        const pnl = value as { percent: number; amount: number };
        const isPositivePercent = pnl.percent >= 0;
        const isPositiveAmount = pnl.amount >= 0;
        return (
          <div className={styles.container}>
            <p
              className={classNames(
                styles.pnlText,
                isPositivePercent
                  ? styles.pnlTextPositive
                  : styles.pnlTextNegative,
              )}
            >
              {isPositivePercent ? "+" : ""}
              {pnl.percent.toFixed(2)}%
            </p>
            <p
              className={classNames(
                styles.pnlText,
                isPositiveAmount
                  ? styles.pnlTextPositive
                  : styles.pnlTextNegative,
              )}
            >
              {formatCompactMoney({ money: pnl.amount })}
            </p>
          </div>
        );
      },
    },
    {
      key: "7DPNL",
      title: "7D PNL",
      render: (value) => {
        const pnl = value as { percent: number; amount: number };
        const isPositivePercent = pnl.percent >= 0;
        const isPositiveAmount = pnl.amount >= 0;
        return (
          <div className={styles.container}>
            <p
              className={classNames(
                styles.pnlText,
                isPositivePercent
                  ? styles.pnlTextPositive
                  : styles.pnlTextNegative,
              )}
            >
              {isPositivePercent ? "+" : ""}
              {pnl.percent.toFixed(2)}%
            </p>
            <p
              className={classNames(
                styles.pnlText,
                isPositiveAmount
                  ? styles.pnlTextPositive
                  : styles.pnlTextNegative,
              )}
            >
              {formatCompactMoney({ money: pnl.amount })}
            </p>
          </div>
        );
      },
    },
    {
      key: "30DPNL",
      title: "30D PNL",
      render: (value) => {
        const pnl = value as { percent: number; amount: number };
        const isPositivePercent = pnl.percent >= 0;
        const isPositiveAmount = pnl.amount >= 0;
        return (
          <div className={styles.container}>
            <p
              className={classNames(
                styles.pnlText,
                isPositivePercent
                  ? styles.pnlTextPositive
                  : styles.pnlTextNegative,
              )}
            >
              {isPositivePercent ? "+" : ""}
              {pnl.percent.toFixed(2)}%
            </p>
            <p
              className={classNames(
                styles.pnlText,
                isPositiveAmount
                  ? styles.pnlTextPositive
                  : styles.pnlTextNegative,
              )}
            >
              {formatCompactMoney({ money: pnl.amount })}
            </p>
          </div>
        );
      },
    },
    {
      key: "7DWINRATE %",
      title: "7D Winrate %",
      render: (value) => (
        <p className={styles.winrateText}>{value.toFixed(2)}%</p>
      ),
    },
    {
      key: "7DWINRATE",
      title: "7D Winrate",
      render: (value) => (
        <div className={styles.container}>
          <p className={styles.winrateText}>{value.wins + value.losses}</p>
          <div className={styles.winrateContainer}>
            <p
              className={classNames(styles.winrateText, styles.winrateTextWin)}
            >
              {value.wins}
            </p>
            <p
              className={classNames(styles.winrateText, styles.winrateTextLoss)}
            >
              {value.losses}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "7DTOKENDISTRIBUTION",
      title: "7D Token Distribution",
      headerClassName: "min-w-[250px]",
      render: (value: ITokenDistribution) => {
        return <TokenDistribution data={value} />;
      },
      cellClassName: "min-w-[250px]",
    },
    {
      key: "7DPROFIT",
      title: "7D Profit",
      render: (value) => {
        const dailyProfit = value as number[];
        return <DailyProfitChart data={dailyProfit} />;
      },
    },
    // {
    //   key: "7DAVGDURATION",
    //   title: "7D Avg Duration",
    //   render: (value) => <p>{value}</p>,
    // },
    {
      key: "7DAVGCOST",
      title: "7D Avg Cost",
      render: (value) => (
        <p className={styles.avgCost}>{formatCompactMoney({ money: value })}</p>
      ),
    },
    {
      key: "LASTTIME",
      title: "Last time",
      render: (value: number) => (
        <p>
          {formatDate({
            date: value,
            options: {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            },
          })}
        </p>
      ),
    },
    {
      key: "copy",
      title: "",
      render: (value: string) => {
        const handleCopyClick = (e: React.MouseEvent) => {
          e.stopPropagation();
          copyTradingForm.setValue("target_address", value);
          setOpenCopyTrading(true);
        };

        return (
          <div onClick={handleCopyClick} className={styles.copyButton}>
            <div className={styles.copyButtonContent}>
              <Image src={whiteWalletIcon} alt="Copy" width={16} height={16} />
              Copy
            </div>
          </div>
        );
      },
    },
  ];

  const data = leaderBoardEntries.map((entry) => ({
    wallet: entry.address,
    "1DPNL": {
      percent: entry.pnl_1d_percent,
      amount: entry.pnl_1d,
    },
    "7DPNL": {
      percent: entry.pnl_7d_percent,
      amount: entry.pnl_7d,
    },
    "30DPNL": {
      percent: entry.pnl_30d_percent,
      amount: entry.pnl_30d,
    },
    "7DWINRATE %": entry.winrate_7d,
    "7DWINRATE": {
      wins: entry.wins_7d,
      losses: entry.losses_7d,
    },
    "7DTOKENDISTRIBUTION": entry.token_distribution_7d || {},
    "7DPROFIT": entry.daily_profit_7d || [],
    // "7DAVGDURATION": entry.avg_duration_7d,
    "7DAVGCOST": entry.avg_cost_7d,
    LASTTIME: entry.last_trade_timestamp,
    copy: entry.address,
    _originalEntry: entry,
  }));

  return { columns, data };
};
