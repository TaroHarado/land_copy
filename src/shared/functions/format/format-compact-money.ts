interface IFormatCompactMoney {
  money: number;
}

export const formatCompactMoney = ({
  money,
}: IFormatCompactMoney) => {
  const absValue = Math.abs(money);
  const sign = money >= 0 ? "+" : "";

  let formattedValue: string;
  let suffix = "";

  if (absValue >= 1_000_000_000) {
    formattedValue = (absValue / 1_000_000_000).toFixed(1);
    suffix = "B";
  } else if (absValue >= 1_000_000) {
    formattedValue = (absValue / 1_000_000).toFixed(1);
    suffix = "M";
  } else if (absValue >= 1_000) {
    formattedValue = (absValue / 1_000).toFixed(1);
    suffix = "K";
  } else {
    formattedValue = absValue.toFixed(1);
  }

  if (formattedValue.endsWith(".0")) {
    formattedValue = formattedValue.slice(0, -2);
  }

  return `${sign}$${formattedValue}${suffix}`;
};

