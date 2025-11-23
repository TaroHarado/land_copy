export const formatNumber = (
  value: number,
  options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  },
) => {
  return new Intl.NumberFormat("en-US", options).format(value);
};
