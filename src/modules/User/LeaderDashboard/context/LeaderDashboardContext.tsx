"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { UseFormHandleSubmit, UseFormReturn } from "react-hook-form";
import {
  IUseCopyTradingForm,
  useCopyTradingForm,
} from "../hooks/useCopyTradingForm";

interface LeaderDashboardContextType {
  copyTradeVariable: "rank" | "copytrade";
  setCopyTradeVariable: (variable: "rank" | "copytrade") => void;
  openCopyTrading: boolean;
  setOpenCopyTrading: (open: boolean) => void;
  copyTradingForm: UseFormReturn<IUseCopyTradingForm>;
  handleSubmit: UseFormHandleSubmit<IUseCopyTradingForm>;
  onSubmit: (data: IUseCopyTradingForm) => void;
}

const LeaderDashboardContext = createContext<
  LeaderDashboardContextType | undefined
>(undefined);

interface LeaderDashboardProviderProps {
  children: ReactNode;
}

export const LeaderDashboardProvider = ({
  children,
}: LeaderDashboardProviderProps) => {
  const [copyTradeVariable, setCopyTradeVariable] = useState<
    "rank" | "copytrade"
  >("rank");
  const [openCopyTrading, setOpenCopyTrading] = useState(false);

  const { copyTradingForm, onSubmit } = useCopyTradingForm({
    onClose: () => setOpenCopyTrading(false),
  });

  return (
    <LeaderDashboardContext.Provider
      value={{
        copyTradeVariable,
        setCopyTradeVariable,
        openCopyTrading,
        setOpenCopyTrading,
        copyTradingForm,
        onSubmit,
        ...copyTradingForm,
      }}
    >
      {children}
    </LeaderDashboardContext.Provider>
  );
};

export const useLeaderDashboardContext = () => {
  const context = useContext(LeaderDashboardContext);
  if (context === undefined) {
    throw new Error(
      "useLeaderDashboard must be used within a LeaderDashboardProvider",
    );
  }
  return context;
};
