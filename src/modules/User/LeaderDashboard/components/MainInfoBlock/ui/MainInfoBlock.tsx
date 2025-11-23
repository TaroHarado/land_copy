import { Table } from "@/src/shared/ui/Table";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IEntry } from "../api/query/getLeaderBoard";
import { TraiderInfoModal } from "../components";
import { useMainInfoCategories } from "../mock/useMainInfoCategories";
import { useTableInfo } from "../mock/useTableInfo";
import styles from "./MainInfoBlock.module.css";

export const MainInfoBlock = () => {
  const [activeUser, setActiveUser] = useState<IEntry | null>(null);

  const { mainInfoCategories, loadingRef, leaderBoardEntries, isLoading } =
    useMainInfoCategories();

  const { columns, data } = useTableInfo({
    leaderBoardEntries,
  });

  return (
    <div className={styles.mainInfoBlock}>
      <div className={styles.mainInfoBlockHeader}>
        {mainInfoCategories.map((category) => (
          <button
            key={category.id}
            onClick={category.onCategoryChange}
            className={twMerge(
              "text-grey-9 font-inter text-xl font-semibold transition-all duration-300",
              category.active && "text-blue",
            )}
          >
            {category.text}
          </button>
        ))}
      </div>
      <Table
        columns={columns}
        data={data}
        loadMoreRef={loadingRef}
        isLoading={isLoading}
        onTableRowClick={(row: IEntry & { _originalEntry: IEntry }) => {
          if (row._originalEntry) {
            setActiveUser(row._originalEntry);
          }
        }}
      />
      {activeUser && (
        <TraiderInfoModal
          isOpen={!!activeUser}
          onClose={() => setActiveUser(null)}
          activeUser={activeUser}
        />
      )}
    </div>
  );
};
