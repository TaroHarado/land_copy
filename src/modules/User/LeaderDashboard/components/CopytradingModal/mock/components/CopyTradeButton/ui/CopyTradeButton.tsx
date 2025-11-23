import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CopyTradeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  error?: string;
  className?: string;
  text: string;
}

export const CopyTradeButton = ({
  isActive,
  error,
  className,
  text,
  ...buttonProps
}: CopyTradeButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-grey-4 font-inter text-grey-8 h-fit w-fit max-w-[150px] flex-1 rounded-3xl border px-5 py-[10px] text-center text-base font-bold",
        isActive && "text-grey-5 border-white-2",
        error && "border-red-500",
        className,
      )}
      {...buttonProps}
    >
      {text}
    </button>
  );
};
