import { useMeInfo } from "@/src/core/api";
import { Button, IButtonPadding, IButtonTheme } from "@/src/shared/ui/Button";
import { twMerge } from "tailwind-merge";

export const CopyTradeVariable = ({
  openCopyTrading,
  copyTradeVariable,
  setCopyTradeVariable,
}: {
  copyTradeVariable: "rank" | "copytrade";
  setCopyTradeVariable: (variable: "rank" | "copytrade") => void;
  openCopyTrading: () => void;
}) => {
  const { data: meInfo } = useMeInfo();

  return (
    <div className="border-grey-4 bg-black-2 flex items-center justify-between border-y px-7 py-2">
      <div className="flex items-center gap-8">
        <button
          onClick={() => setCopyTradeVariable("rank")}
          className={twMerge(
            "font-inter text-grey-9 hover:text-blue text-2xl font-semibold transition-all duration-300",
            copyTradeVariable === "rank" && "text-blue",
          )}
        >
          Rank
        </button>
        <button
          onClick={() => setCopyTradeVariable("copytrade")}
          className={twMerge(
            "font-inter text-grey-9 hover:text-blue text-2xl font-semibold transition-all duration-300",
            copyTradeVariable === "copytrade" && "text-blue",
          )}
        >
          CopyTrade
        </button>
      </div>
      <Button
        theme={IButtonTheme.AUTH_PRIMARY}
        padding={IButtonPadding.MEDIUM}
        onClick={openCopyTrading}
        disabled={!meInfo?.allowance_set}
      >
        Create CopyTrade
      </Button>
    </div>
  );
};
