import { FC } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Table.module.css";
import { ITableProps } from "./types/table-types";

export const Table: FC<ITableProps> = ({
  columns,
  data,
  isLoading,
  className,
  emptyText = "No data",
  loadMoreRef,
  onTableRowClick,
  getRowClassName,
}) => {
  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  };

  return (
    <div className={twMerge(styles.tableWrapper, className?.table)}>
      <div className={twMerge(styles.thead, className?.thead)}>
        <div className={styles.theadRow}>
          {columns.map((column, index) => (
            <div
              key={index}
              className={twMerge(
                styles.th,
                className?.th,
                column.headerClassName,
              )}
              style={{
                width: column.width,
                textAlign: column.align || "left",
              }}
            >
              {column.title}
            </div>
          ))}
        </div>
      </div>
      <div className={twMerge(styles.tbody, className?.tbody)}>
        {isLoading ? (
          <div className={styles.emptyCell}>Loading...</div>
        ) : data.length === 0 ? (
          <div className={twMerge(styles.emptyCell, className?.td)}>
            {emptyText}
          </div>
        ) : (
          data.map((row, rowIndex) => {
            const rowClassName = getRowClassName?.(row, rowIndex);

            return (
              <div
                key={rowIndex}
                className={twMerge(styles.tr, className?.tr, rowClassName)}
                onClick={() => onTableRowClick?.(row)}
              >
                {columns.map((column, index) => {
                  const value = getNestedValue(row, column.key);
                  const cellClassName =
                    typeof column.cellClassName === "function"
                      ? column.cellClassName(value, row, rowIndex)
                      : column.cellClassName;

                  return (
                    <div
                      key={index}
                      className={twMerge(
                        styles.td,
                        className?.td,
                        cellClassName,
                      )}
                      style={{ textAlign: column.align || "left" }}
                    >
                      {column.render
                        ? column.render(value, row, rowIndex)
                        : value}
                    </div>
                  );
                })}
              </div>
            );
          })
        )}
      </div>
      {loadMoreRef && <div ref={loadMoreRef} className={styles.loadMore} />}
    </div>
  );
};
