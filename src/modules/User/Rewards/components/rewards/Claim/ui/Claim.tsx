"use client";

import {
  Button,
  IButtonHoverEffect,
  IButtonTheme,
} from "@/src/shared/ui/Button";
import Image from "next/image";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CircularProgress } from "../components/CircularProgress/ui/CircularProgress";
import { useClaimData } from "../hooks/useClaimData";

export const Claim = () => {
  const { claimData } = useClaimData();

  return (
    <div className="z-10 flex w-full gap-8">
      <div className="bg-black-5 border-black-4 flex flex-1 flex-col gap-6 rounded-3xl border p-6">
        <div className="flex items-start gap-3">
          <Image
            src={claimData.usdcRewards.icon}
            alt={claimData.usdcRewards.title}
            width={24}
            height={24}
          />
          <h3 className="font-inter text-white-2 text-xl font-bold">
            {claimData.usdcRewards.title}
          </h3>
        </div>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={claimData.usdcRewards.chartData}>
              <defs>
                <linearGradient id="colorRewards" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#24DAFF" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#13252b" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8B8B8B", fontSize: 13 }}
                tickMargin={20}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8B8B8B", fontSize: 13 }}
                domain={[0, 100]}
                ticks={[0, 50, 100]}
                tickMargin={20}
                padding={{ top: 0, bottom: 0 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#24DAFF"
                strokeWidth={2}
                fill="url(#colorRewards)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-black-5 border-black-4 flex flex-1 flex-col justify-between gap-6 rounded-3xl border p-6">
        <div className="flex items-start gap-3">
          <Image
            src={claimData.claim.icon}
            alt={claimData.claim.title}
            width={24}
            height={24}
          />
          <h3 className="font-inter text-white-2 text-xl font-bold">
            {claimData.claim.title}
          </h3>
        </div>
        <div className="flex justify-center gap-4">
          {claimData.claim.rewards.map((reward) => (
            <div
              key={reward.id}
              className="border-white-2 flex items-center gap-3 rounded-3xl border px-4 py-1.5"
            >
              <Image
                src={reward.icon}
                alt={reward.value}
                width={32}
                height={32}
              />
              <span className="font-inter text-white-2 text-2xl font-bold">
                {reward.value}
              </span>
            </div>
          ))}
        </div>
        <Button
          theme={IButtonTheme.AUTH_PRIMARY}
          className="max-w-auto w-full py-4 font-bold"
          hoverEffect={IButtonHoverEffect.FADE}
        >
          {claimData.claim.buttonText}
        </Button>
      </div>

      <div className="bg-black-5 border-black-4 flex flex-1 flex-col justify-between gap-6 rounded-3xl border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            <Image
              src={claimData.quests.icon}
              alt={claimData.quests.leftTitle}
              width={24}
              height={24}
            />
            <h3 className="font-inter text-white-2 text-xl font-bold">
              {claimData.quests.leftTitle}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <h3 className="font-inter text-grey-18 text-[15px]">
              {claimData.quests.rightTitle}
            </h3>
          </div>
        </div>
        <div className="flex justify-between">
          {claimData.quests.items.map((quest) => (
            <CircularProgress
              key={quest.id}
              progress={quest.progress}
              value={quest.value}
              label={quest.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
