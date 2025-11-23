import { forwardRef, Ref } from "react";
import { twMerge } from "tailwind-merge";
import { IInput } from "./types/input-types";

export const Input = forwardRef(
  ({ theme, className, ...inputProps }: IInput, ref: Ref<HTMLInputElement>) => {
    const finalClassName = twMerge(theme && theme, className);

    return <input {...inputProps} ref={ref} className={finalClassName} />;
  },
);
