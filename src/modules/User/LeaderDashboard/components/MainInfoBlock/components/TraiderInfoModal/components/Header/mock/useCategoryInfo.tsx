import { useForm } from "react-hook-form";

export enum ECategory {
  ACTIVE = "active",
  HISTORY = "history",
  TOP = "TOP",
}

export interface TableInfo {
  category: ECategory;
}

export const useCategoryInfo = () => {
  const categoryInfo = useForm<TableInfo>({
    defaultValues: {
      category: ECategory.ACTIVE,
    },
  });

  const activeCategory = categoryInfo.watch('category')

  const categories = [
    {
      id: 1,
      title: "Active Positions",
      isActive: activeCategory === ECategory.ACTIVE,
      type: ECategory.ACTIVE
    },
    {
      id: 2,
      title: "History",
      isActive: activeCategory === ECategory.HISTORY,
      type: ECategory.HISTORY
    },
    {
      id: 3,
      title: "Top 100",
      isActive: activeCategory === ECategory.TOP,
      type: ECategory.TOP
    },
  ];

  return {
    categories,
    ...categoryInfo
  };
};
