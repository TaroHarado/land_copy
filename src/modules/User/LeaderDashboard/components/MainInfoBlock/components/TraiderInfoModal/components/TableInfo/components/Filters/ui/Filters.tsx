import LoupeIcon from "@/public/icons/loupe.svg?comp";
import { classNames } from "@/src/shared/lib";
import { UseFormSetValue } from "react-hook-form";
import { ECategory, TableInfo } from "../../../../Header/mock/useCategoryInfo";
import styles from "./Filters.module.css";

interface IFilters {
  categories: {
    id: number;
    title: string;
    isActive: boolean;
    type: string;
  }[];
  setValue: UseFormSetValue<TableInfo>;
}

export const Filters = ({ categories, setValue }: IFilters) => {
  return (
    <div className={styles.filters}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={classNames(
              styles.category,
              category.isActive && styles.activeCategory,
            )}
            onClick={() => setValue("category", category.type as ECategory)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Search by name or address" />
        <LoupeIcon />
      </div>
    </div>
  );
};
