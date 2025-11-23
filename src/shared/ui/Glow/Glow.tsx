import { twMerge } from "tailwind-merge";

interface IGlow {
  className?: string;
}

export const Glow = ({ className }: IGlow) => {
  return (
    <div
      className={twMerge(
        "bg-blue absolute top-1/2 left-1/2 h-[40px] w-[300px] -translate-x-1/2 blur-[800px]",
        className,
      )}
    />
  );
};
