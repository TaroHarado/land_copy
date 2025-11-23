"use client";

import coinIcon from "@/public/icons/coin.svg";
import logoIcon from "@/public/icons/logo/logo.svg";
import { formatMoney } from "@/src/shared/functions/format/format-money";
import {
  Button,
  IButtonHoverEffect,
  IButtonTheme,
} from "@/src/shared/ui/Button";
import Image from "next/image";
import { useState } from "react";
import { EditReferralModal } from "../components/EditReferralModal/ui/EditReferralModal";

export const RewardsInfo = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <div className="z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2.5">
              <Image src={logoIcon} alt="logoIcon" width={25} height={25} />
              <p className="font-inter text-white-2 text-2xl font-bold">
                {formatMoney({
                  money: 1014471,
                })}
              </p>
              <p className="font-inter text-grey-15 text-xl font-bold">
                Points
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Image src={coinIcon} alt="coinIcon" width={25} height={25} />
              <p className="font-inter text-white-2 text-2xl font-bold">
                {formatMoney({
                  money: 2167,
                })}
              </p>
              <p className="font-inter text-grey-15 text-xl font-bold">
                Earned
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Button
                theme={IButtonTheme.GRAY}
                className="min-w-[137px] px-5 py-2.5 text-xl"
                hoverEffect={IButtonHoverEffect.FADE}
                onClick={() => {setIsEditModalOpen(true); console.log("Edit Referral")}}
              >
                Edit Referral
              </Button>
              <Button
                theme={IButtonTheme.AUTH_PRIMARY}
                className="min-w-[137px] px-5 py-2.5 text-xl"
                hoverEffect={IButtonHoverEffect.FADE}
              >
                Share Referral
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2.5">
              <div className="flex items-center gap-2.5">
                <p className="font-inter text-grey-15 text-xl font-bold">
                  Next Level
                </p>
              </div>
              <p className="font-inter text-blue text-xl font-bold">
                4X Rewards rate for Points and POL
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <p className="font-inter text-grey-16 text-xl">
                You're almost there! Trade 774.52 USDC to reach
              </p>
            </div>
          </div>
          <div className="bg-black-4 relative h-[15px] rounded-xl">
            <div className="bg-blue absolute h-[15px] w-40 rounded-xl" />
          </div>
        </div>
      </div>

      <EditReferralModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
};
