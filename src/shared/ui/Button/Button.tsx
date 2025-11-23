import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { IButton } from "./types/button-types";

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  theme,
  padding,
  type = "button",
  hoverEffect,
  disabled,
  size,
  ...other
}) => {
  const finalClassName = twMerge(
    "text-xl font-bold duration-300 rounded-4xl p-3",
    theme && theme,
    size && size,
    padding && padding,
    hoverEffect && hoverEffect,
    disabled && "opacity-50 select-none",
    className,
  );

  return (
    <button
      className={finalClassName}
      {...other}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
