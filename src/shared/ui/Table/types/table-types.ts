import { ReactNode, RefObject } from "react";

export interface ITableColumn<T = any> {
  key: string;
  title: string;
  render?: (value: any, row: T, index: number) => ReactNode;
  width?: string;
  align?: "start" | "center" | "end";
  headerClassName?: string;
  cellClassName?: string | ((value: any, row: T, index: number) => string);
}

export interface ITableProps<T = any> {
  columns: ITableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  className?: {
    table?: string;
    thead?: string;
    tbody?: string;
    th?: string;
    tr?: string;
    td?: string;
  };
  emptyText?: string;
  loadMoreRef?: RefObject<HTMLDivElement | null>;
  onTableRowClick?: (row: T) => void;
  getRowClassName?: (row: T, index: number) => string;
}
