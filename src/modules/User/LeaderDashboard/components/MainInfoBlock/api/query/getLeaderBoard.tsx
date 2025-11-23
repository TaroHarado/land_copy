import api from "@/src/shared/api/api";
import { useInfiniteScroll } from "@/src/shared/api/hooks";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { EMainInfoCategories } from "../../mock/useMainInfoCategories";

interface GetLeaderBoardProps {
  limit: number;
  category: EMainInfoCategories;
}

export interface TokenDistribution {
  ">500"?: number;
  "0-500"?: number;
  ">-50"?: number;
  "<-50"?: number;
}

export interface IEntry {
  address: string;
  pnl_1d: number;
  pnl_1d_percent: number;
  pnl_7d: number;
  pnl_7d_percent: number;
  pnl_30d: number;
  pnl_30d_percent: number;
  winrate_7d: number;
  wins_7d: number;
  losses_7d: number;
  avg_duration_7d: number;
  avg_cost_7d: number;
  total_trades: number;
  last_trade_timestamp: number;
  calculated_at: string;
  daily_profit_7d: number[];
  token_distribution_7d: TokenDistribution;
}

interface GetLeaderBoardResponse {
  category: EMainInfoCategories;
  entries: IEntry[];
  total: number;
  sort_by: string;
  updated_at: string;
}

export const useGetLeaderBoard = ({
  limit,
  category = EMainInfoCategories.ALL,
}: GetLeaderBoardProps) => {
  const query = useInfiniteQuery({
    queryKey: ["leaderboard", category],
    queryFn: async ({ pageParam = 0 }) => {
      const searchParams = new URLSearchParams({
        offset: pageParam.toString(),
        limit: limit.toString(),
      });

      const response = await api.get<GetLeaderBoardResponse>(
        `/leaderboard/top/${category}/?${searchParams}`,
      );
      return response.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const currentOffset = allPages.length * limit;
      const hasMore =
        lastPage.entries.length === limit && currentOffset < lastPage.total;
      return hasMore ? currentOffset : undefined;
    },
    initialPageParam: 0,
    placeholderData: keepPreviousData,
  });

  const { loadingRef } = useInfiniteScroll({
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    fetchNextPage: query.fetchNextPage,
  });

  const leaderBoardEntries =
    query.data?.pages.flatMap((page) => page.entries) ?? [];

  return { leaderBoardEntries, loadingRef, ...query };
};
