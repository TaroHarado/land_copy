import { useForm } from "react-hook-form";
import { useGetLeaderBoard } from "../api/query/getLeaderBoard";

export enum EMainInfoCategories {
  ALL = "all",
  POLITICS = "politics",
  SPORTS = "sports",
  CRYPTO = "crypto",
  POP_CULTURE = "pop-culture",
}

export const useMainInfoCategories = () => {
  const { setValue, watch } = useForm<{ category: string }>({
    defaultValues: {
      category: EMainInfoCategories.ALL,
    },
  });

  const { leaderBoardEntries, loadingRef, isLoading } = useGetLeaderBoard({
    limit: 30,
    category: watch("category") as EMainInfoCategories,
  });

  const mainInfoCategories = [
    {
      id: 1,
      text: "All",
      onCategoryChange: () => {
        setValue("category", EMainInfoCategories.ALL);
      },
      active: watch("category") === EMainInfoCategories.ALL,
    },
    {
      id: 2,
      text: "Politics",
      onCategoryChange: () => {
        setValue("category", EMainInfoCategories.POLITICS);
      },
      active: watch("category") === EMainInfoCategories.POLITICS,
    },
    {
      id: 3,
      text: "Sport",
      onCategoryChange: () => {
        setValue("category", EMainInfoCategories.SPORTS);
      },
      active: watch("category") === EMainInfoCategories.SPORTS,
    },
    {
      id: 4,
      text: "Crypto",
      onCategoryChange: () => {
        setValue("category", EMainInfoCategories.CRYPTO);
      },
      active: watch("category") === EMainInfoCategories.CRYPTO,
    },
    {
      id: 5,
      text: "Pop Culture",
      onCategoryChange: () => {
        setValue("category", EMainInfoCategories.POP_CULTURE);
      },
      active: watch("category") === EMainInfoCategories.POP_CULTURE,
    },
  ];

  return {
    mainInfoCategories,
    leaderBoardEntries,
    loadingRef,
    isLoading,
  };
};
