import { ButtonHTMLAttributes } from "react";

export enum IButtonTheme {
  // AUTH_PRIMARY = "bg-blue font-onest text-blue-3 w-[50%] max-w-[350px] rounded-4xl p-5 text-xl font-bold",
  AUTH_PRIMARY = "bg-blue font-onest text-blue-3 w-fit max-w-[350px]",
  GRAY = 'bg-black-4 text-white-2'
}

export enum IButtonSize {
  SMALL = "p-3 text-base",
}

export enum IButtonPadding {
  MEDIUM = 'px-6 py-2.5'
}

export enum IButtonHoverEffect {
  SCALE = "hover:scale-105 transition-transform",
  SHADOW = "hover:shadow-lg transition-shadow",
  GLOW = "hover:shadow-lg hover:shadow-blue-500/50 transition-shadow",
  LIFT = "hover:-translate-y-1 transition-transform",
  TRANSFORM_Y_WITH_SHADOW = "hover:-translate-y-1 hover:shadow-lg transition-all",
  FADE = "hover:opacity-80 transition-opacity",
  PULSE = "hover:animate-pulse",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: IButtonTheme;
  size?: IButtonSize;
  className?: string;
  type?: "submit" | "reset" | "button";
  hoverEffect?: IButtonHoverEffect;
  padding?: IButtonPadding;
}
