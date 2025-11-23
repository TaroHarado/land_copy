"use client";

import { MainUserLayout } from "@/src/app/layout/user";
import { Glow } from "@/src/shared/ui/Glow";
import { useState } from "react";
import {
  Claim,
  LeaderboardRewards,
  ProfileInfo,
  ReferalsActivityTable,
  RewardsBlock,
  RewardsInfo,
} from "../components";

export const Rewards = () => {
  const [activeBlock, setActiveBlock] = useState<"rewards" | "leaderboard">(
    "rewards",
  );

  return (
    <MainUserLayout>
      <div className="relative mb-2.5 flex h-full w-full flex-col gap-8">
        <RewardsBlock
          activeBlock={activeBlock}
          setActiveBlock={setActiveBlock}
        />
        {activeBlock === "rewards" && (
          <div className="flex flex-col gap-8 px-11">
            <ProfileInfo />
            <Glow className="top-[10%] h-[45%] w-[55%] bg-[#24daff42] blur-[180px]" />
            <RewardsInfo />
            <Claim />
            <ReferalsActivityTable />
          </div>
        )}
        {activeBlock === "leaderboard" && (
          <div className="flex flex-col gap-8 px-11">
            <ProfileInfo />
            <LeaderboardRewards />
          </div>
        )}
      </div>
    </MainUserLayout>
  );
};
