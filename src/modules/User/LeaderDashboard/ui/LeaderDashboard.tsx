"use client";

import { MainUserLayout } from "@/src/app/layout/user";
import {
  CopyTradeVariable,
  CopyTradingModal,
  MainInfoBlock,
} from "../components";
import { LeaderDashboardProvider, useLeaderDashboardContext } from "../context";

const LeaderDashboardContent = () => {
  const {
    copyTradeVariable,
    setCopyTradeVariable,
    openCopyTrading,
    setOpenCopyTrading,
    copyTradingForm,
    handleSubmit,
    onSubmit,
  } = useLeaderDashboardContext();

  return (
    <MainUserLayout>
      <CopyTradeVariable
        copyTradeVariable={copyTradeVariable}
        setCopyTradeVariable={setCopyTradeVariable}
        openCopyTrading={() => setOpenCopyTrading(true)}
      />
      <MainInfoBlock />
      {openCopyTrading && (
        <CopyTradingModal
          isOpen={openCopyTrading}
          onClose={() => setOpenCopyTrading(false)}
          copyTradingForm={copyTradingForm}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )}
    </MainUserLayout>
  );
};

export const LeaderDashboard = () => {
  return (
    <LeaderDashboardProvider>
      <LeaderDashboardContent />
    </LeaderDashboardProvider>
  );
};
