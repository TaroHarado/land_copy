"use client";

import { Table } from "@/src/shared/ui/Table";
import { useLeaderboardData } from "../mock/useLeaderboardData";

export const LeaderboardRewards = () => {
  const { columns, data } = useLeaderboardData();

  return (
    <div className="flex flex-col gap-6 z-10">
      <h2 className="font-inter text-white-2 text-2xl font-bold">
        Points Leaderboard
      </h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

