import { useForm } from "react-hook-form";

export enum TraiderInfoTime {
  ONE_MINUTE = "1min",
  FIVE_MINES = "5min",
  THIRTY_MIN = "30min",
  MAX = "Max",
}

export interface TraiderInfoForm {
  time: TraiderInfoTime;
}

export const useTraiderInfoForm = () => {
  const traiderInfoForm = useForm<TraiderInfoForm>({
    defaultValues: {
      time: TraiderInfoTime.ONE_MINUTE,
    },
  });

  return {
    traiderInfoForm,
    ...traiderInfoForm
  }
};
