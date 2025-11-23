interface IFormatDate {
  date: number | string | Date;
  options?: Intl.DateTimeFormatOptions;
  locale?: string;
}

export const formatDate = ({
  date,
  options,
  locale = "en-US",
}: IFormatDate): string => {
  const dateObject =
    typeof date === "number"
      ? new Date(date * 1000)
      : typeof date === "string"
        ? new Date(date)
        : date;

  return dateObject.toLocaleDateString(locale, options);
};
