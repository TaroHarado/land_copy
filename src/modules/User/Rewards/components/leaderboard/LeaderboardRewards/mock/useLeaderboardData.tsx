import likeIcon from "@/public/icons/like.svg";
import logoIcon from "@/public/icons/logo/logo.svg";
import { formatMoney } from "@/src/shared/functions/format/format-money";
import { ITableColumn } from "@/src/shared/ui/Table";
import Image from "next/image";

export interface LeaderboardEntry {
  rank: number;
  trader: {
    avatar: string;
    username: string;
  };
  totalPoints: number;
  trading: number;
  referrals: number;
}

export const useLeaderboardData = () => {
  const mockData: LeaderboardEntry[] = [
    {
      rank: 1,
      trader: {
        avatar: "/icons/emoji/dog.svg",
        username: "tututudu33",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 2,
      trader: {
        avatar: "/icons/emoji/emoji1.svg",
        username: "wfef4tg",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 3,
      trader: {
        avatar: "/icons/emoji/pill.svg",
        username: "vervg5yny",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 4,
      trader: {
        avatar: "",
        username: "vrvavrcs",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 5,
      trader: {
        avatar: "",
        username: "cergtyniu",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 6,
      trader: {
        avatar: "",
        username: "vrtvrv",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 7,
      trader: {
        avatar: "",
        username: "evrt",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
    {
      rank: 8,
      trader: {
        avatar: "",
        username: "vieniaemokfeni",
      },
      totalPoints: 1708237500,
      trading: 1708237500,
      referrals: 1708237500,
    },
  ];

  const columns: ITableColumn<LeaderboardEntry>[] = [
    {
      key: "rank",
      title: "Rank",
      align: "start",
      width: "80px",
      render: (value) => {
        const rank = value as number;
        const isTopThree = rank <= 3;
        return (
          <span
            className={`font-inter text-xl font-semibold ${
              isTopThree ? "text-yellow-400" : "text-white-2"
            }`}
          >
            {rank}
          </span>
        );
      },
    },
    {
      key: "trader",
      title: "Trader",
      align: "start",
      render: (value) => {
        const trader = value as LeaderboardEntry["trader"];
        return (
          <div className="flex items-center gap-3">
            {trader.avatar ? (
              <Image
                src={trader.avatar}
                alt={trader.username}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="bg-grey-4 h-10 w-10 rounded-full" />
            )}
            <span className="font-inter text-white-2 text-base">
              {trader.username}
            </span>
            <Image
              src={likeIcon}
              alt="like"
              width={16}
              height={16}
              className="opacity-50"
            />
          </div>
        );
      },
    },
    {
      key: "totalPoints",
      title: "Total Points",
      align: "start",
      render: (value) => {
        const points = value as number;
        return (
          <div className="flex items-center gap-2">
            <Image src={logoIcon} alt="points" width={16} height={16} />
            <span className="font-inter text-white-2 text-base">
              {formatMoney({ money: points })}
            </span>
          </div>
        );
      },
    },
    {
      key: "trading",
      title: "Trading",
      align: "start",
      render: (value) => {
        const points = value as number;
        return (
          <div className="flex items-center gap-2">
            <Image src={logoIcon} alt="points" width={16} height={16} />
            <span className="font-inter text-white-2 text-base">
              {formatMoney({ money: points })}
            </span>
          </div>
        );
      },
    },
    {
      key: "referrals",
      title: "Referrals",
      align: "start",
      render: (value) => {
        const points = value as number;
        return (
          <div className="flex items-center gap-2">
            <Image src={logoIcon} alt="points" width={16} height={16} />
            <span className="font-inter text-white-2 text-base">
              {formatMoney({ money: points })}
            </span>
          </div>
        );
      },
    },
  ];

  return {
    columns,
    data: mockData,
  };
};
