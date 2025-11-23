interface IFormatMoney {
  money: number;
  currency?: string;
}

export const formatMoney = ({ money, currency = "USD" }: IFormatMoney) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(money);
};
