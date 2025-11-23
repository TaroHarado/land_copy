"use client";

import { IUseCopyTradingForm } from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";
import { Modal } from "@/src/shared/ui/Modal";
import { EModalPosition } from "@/src/shared/ui/Modal/Modal";
import { FC } from "react";
import {
  FormProvider,
  UseFormHandleSubmit,
  UseFormReturn,
} from "react-hook-form";
import {
  ChooseTradingStrategy,
  CopyTradingFooterModal,
  Header,
  MainWalletInfo,
} from "../components";
import { useCopyTradingStrategyMock } from "../mock/useCopyTradingStrategyMock";

interface CopyTradingModalProps {
  isOpen: boolean;
  onClose: () => void;
  copyTradingForm: UseFormReturn<IUseCopyTradingForm>;
  handleSubmit: UseFormHandleSubmit<IUseCopyTradingForm>;
  onSubmit: (data: IUseCopyTradingForm) => void;
}

export const CopyTradingModal: FC<CopyTradingModalProps> = ({
  isOpen,
  onClose,
  copyTradingForm,
  handleSubmit,
  onSubmit,
}) => {
  const { copyTradingStrategyMock, currentItem, setHoveredItem } =
    useCopyTradingStrategyMock();

  return (
    <FormProvider {...copyTradingForm}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position={EModalPosition.MODAL_POSITION_RIGHT}
        className={{ modalContentStyles: "h-full", modalOverlayStyles: "z-50" }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="h-full">
          <div
            className="bg-black-3 relative flex h-full w-[650px] flex-col justify-between"
            style={{
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          >
            <div className="flex flex-col">
              <Header onClose={onClose} />
              <div className="flex flex-col gap-5 px-5 py-4">
                <MainWalletInfo />
                <ChooseTradingStrategy
                  copyTradingStrategyMock={copyTradingStrategyMock}
                  setHoveredItem={setHoveredItem}
                  currentItem={currentItem ?? null}
                />
              </div>
            </div>
            <CopyTradingFooterModal />
          </div>
        </form>
      </Modal>
    </FormProvider>
  );
};
