export enum IInputTheme {
  GREY_INPUT = "font-inter text-grey-5 flex-1 text-base font-normal",
}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: IInputTheme;
  isActive?: boolean;
}
