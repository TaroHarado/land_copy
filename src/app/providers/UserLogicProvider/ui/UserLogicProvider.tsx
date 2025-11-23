"use client";

import { useMeInfo } from "@/src/core/api";
import { useSetAllowance } from "@/src/core/api/mutate/setAllowance";
import { FC, PropsWithChildren, useEffect } from "react";

export const UserLogicProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: meInfo } = useMeInfo();
  const { setAllowance } = useSetAllowance();

  useEffect(() => {
    if (meInfo && meInfo?.allowance_set === false) {
      setAllowance.mutate();
      console.log("setAllowance");
    }
  }, [meInfo]);

  return <>{children}</>;
};
