import { Input } from "@/src/shared/ui/Input";
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { twMerge } from "tailwind-merge";

interface copyTradingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isActive?: boolean;
  error?: string;
}

export const CopyTradingInput = forwardRef(
  (
    { isActive, className, error, ...inputProps }: copyTradingInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <Input
          className={twMerge(
            "bg-grey-4 font-inter text-grey-8 w-fit max-w-[150px] rounded-3xl border px-5 py-[10px] text-center text-base font-bold",
            isActive && "text-grey-5 border-white-2",
            error && "border-red-500",
            className,
          )}
          {...inputProps}
          ref={ref}
        />
        {error && (
          <p className="font-inter ml-1 text-xs font-normal text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);
