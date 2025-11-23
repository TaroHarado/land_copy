"use client";

import copeIcon from "@/public/icons/copy.svg";
import { useMeInfo } from "@/src/core/api/query/meInfo";
import { AuthMainBlock } from "@/src/modules";
import { useCopyText } from "@/src/shared/hooks/useCopyText";
import Image from "next/image";
import { useState } from "react";
import { useSetStage } from "../../../hooks/useSetStage";
import { FinalSaveChanceModal, SliderButton } from "../components";
import { useSlideButton } from "../components/SliderButton/hooks/useSlideButton";

export const SecondAuthStage = () => {
  const [openFinalSaveChanceModal, setOpenFinalSaveChanceModal] =
    useState(false);

  const { dragPosition, sliderRef, buttonRef, handleMouseDown, privateKey } =
    useSlideButton();
  const { handleCopyText } = useCopyText();

  const { data: meInfo } = useMeInfo();
  const { setStage } = useSetStage();
  
  return (
    <AuthMainBlock
      currentStep={2}
      isButtonDisabled={!privateKey?.private_key}
      title="This is your"
      description="Polycopy trading wallet."
      buttonAction={() => {
        setOpenFinalSaveChanceModal(true);
        setStage("3");
      }}
      buttonText="Continue"
      isCompleted={!!privateKey?.private_key}
    >
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-inter text-xl font-bold text-white">
            POLYCOPY TRADING WALLET
          </p>
          <div className="bg-grey-3 flex items-center justify-between rounded-full px-6 py-3">
            <p className="max-w-[95%] overflow-hidden text-lg font-light text-ellipsis text-white">
              {meInfo?.internal_wallet_address}
            </p>
            <button
              onClick={() => handleCopyText(meInfo?.internal_wallet_address)}
            >
              <Image src={copeIcon} alt="copeIcon" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5">
          <p className="font-inter text-xl font-bold text-white">
            POLYCOPY TRADING WALLET
          </p>
          <div className="flex max-w-[700px] flex-col gap-5">
            <div className="font-inter text-grey-2 text-lg font-light">
              Please copy the below private key and store it in a safe location.{" "}
              <span className="font-bold">
                Your private key will NOT be displayed again
              </span>
            </div>
            <SliderButton
              sliderRef={sliderRef}
              buttonRef={buttonRef}
              handleMouseDown={handleMouseDown}
              dragPosition={dragPosition}
              privateKey={privateKey}
            />
          </div>
        </div>
      </div>
      {openFinalSaveChanceModal && (
        <FinalSaveChanceModal
          isOpen={openFinalSaveChanceModal}
          onClose={() => setOpenFinalSaveChanceModal(false)}
        />
      )}
    </AuthMainBlock>
  );
};
