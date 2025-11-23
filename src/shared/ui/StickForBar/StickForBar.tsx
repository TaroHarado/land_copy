import { twMerge } from "tailwind-merge";

export const StickForBar = ({ className }: { className?: string }) => {
  return <div className={twMerge("bg-grey-4 h-[30px] w-[2px]", className)} />;
};
