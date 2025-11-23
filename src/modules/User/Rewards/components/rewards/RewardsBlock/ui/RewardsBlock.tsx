import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface IRewardsBlock {
  setActiveBlock: Dispatch<SetStateAction<"rewards" | "leaderboard">>;
  activeBlock: "rewards" | "leaderboard";
}

export const RewardsBlock = ({
  activeBlock,
  setActiveBlock,
}: IRewardsBlock) => {
  return (
    <div className="border-grey-4 flex items-center border-y gap-8 py-6 px-10">
      <button
        className={twMerge(
          "font-inter text-grey-9 text-2xl font-semibold hover:text-blue duration-300 transition-all",
          activeBlock == "rewards" && "text-blue",
        )}
        onClick={() => setActiveBlock('rewards')}
      >
        Rewards
      </button>
      <button
        className={twMerge(
          "font-inter text-grey-9 text-2xl font-semibold hover:text-blue duration-300 transition-all",
          activeBlock == "leaderboard" && "text-blue",
        )}
        onClick={() => setActiveBlock('leaderboard')}
      >
        Leaderboard
      </button>
    </div>
  );
};
