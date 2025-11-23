import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import {
  TraiderInfoForm,
  TraiderInfoTime,
} from "../../../hooks/useTraiderInfoForm";

interface TimeFilters {
  watch: UseFormWatch<TraiderInfoForm>;
  setValue: UseFormSetValue<TraiderInfoForm>;
}

export const useTimeFIlters = ({ watch, setValue }: TimeFilters) => {
  const onTimeFilterClick = (time: TraiderInfoTime) => {
    setValue("time", time);
  };

  const timeFilters = [
    {
      value: "1min",
      title: "1m",
      activeTime: watch("time") === TraiderInfoTime.ONE_MINUTE,
      onClick: onTimeFilterClick(TraiderInfoTime.ONE_MINUTE),
    },
    {
      value: "5min",
      title: "5m",
      activeTime: watch("time") === TraiderInfoTime.FIVE_MINES,
      onClick: onTimeFilterClick(TraiderInfoTime.FIVE_MINES),
    },
    {
      value: "30min",
      title: "30m",
      activeTime: watch("time") === TraiderInfoTime.THIRTY_MIN,
      onClick: onTimeFilterClick(TraiderInfoTime.THIRTY_MIN),
    },
    {
      value: "max",
      title: "Max",
      activeTime: watch("time") === TraiderInfoTime.MAX,
      onClick: onTimeFilterClick(TraiderInfoTime.MAX),
    },
  ];

  return {
    timeFilters,
  };
};
