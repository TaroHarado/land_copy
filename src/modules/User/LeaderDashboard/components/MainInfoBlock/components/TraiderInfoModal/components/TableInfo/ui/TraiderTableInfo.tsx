import { IEntry } from "../../../../../api/query/getLeaderBoard";
import { useCategoryInfo } from "../../Header/mock/useCategoryInfo";
import { Filters, PositionsTable, TraiderStatistics } from "../components";
import styles from "./TraiderTableInfo.module.css";

interface TableInfoProps {
  activeUser: IEntry;
}

export const TraiderTableInfo = ({ activeUser }: TableInfoProps) => {
  const { categories, setValue } = useCategoryInfo();

  return (
    <div className={styles.tableInfo}>
      <TraiderStatistics activeUser={activeUser} />
      <Filters categories={categories} setValue={setValue} />
      <PositionsTable />
    </div>
  );
};
