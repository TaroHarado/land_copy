import { ITableColumn } from "@/src/shared/ui/Table";

export const usePositionsTable = () => {
  const columns: ITableColumn[] = [
    { key: "PairInfo", title: "Pair Info", align: "start" },
    { key: "Bought", title: "Bought", align: "start" },
    { key: "Sold", title: "Sold", align: "start" },
    { key: "Remaining", title: "Remaining", align: "start" },
    { key: "PNL", title: "PNL", align: "start" },
    { key: "Action", title: "Action", align: "start" },
  ];

  return { columns };
};
