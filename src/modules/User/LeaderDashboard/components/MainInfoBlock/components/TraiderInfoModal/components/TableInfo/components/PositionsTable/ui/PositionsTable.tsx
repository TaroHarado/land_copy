import { Table } from "@/src/shared/ui/Table";
import { usePositionsTable } from "../mock/usePositionsTable";
import styles from "./PositionsTable.module.css";

export const PositionsTable = () => {
  const { columns } = usePositionsTable();

  return <Table columns={columns} data={[]} className={{
    table: styles.table,
  }}/>;
};
