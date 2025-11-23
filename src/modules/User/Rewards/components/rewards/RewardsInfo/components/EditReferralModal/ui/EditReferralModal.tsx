"use client";

import crossIcon from "@/public/icons/cross.svg";
import {
  NotificationType,
  useNotificationContext,
} from "@/src/app/providers/NotificationProvider";
import {
  Button,
  IButtonHoverEffect,
  IButtonTheme,
} from "@/src/shared/ui/Button";
import { Modal } from "@/src/shared/ui/Modal";
import { EModalPosition } from "@/src/shared/ui/Modal/Modal";
import Image from "next/image";
import { useState } from "react";

interface EditReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditReferralModal = ({
  isOpen,
  onClose,
}: EditReferralModalProps) => {
  const [referralCode, setReferralCode] = useState("");
  const { addNotification } = useNotificationContext();

  const handleSave = () => {
    console.log("Saving referral code:", referralCode);

    addNotification({
      message: "Your referral code updated successfully to bibaboba2",
      type: NotificationType.SUCCESS,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={EModalPosition.MODAL_POSITION_CENTER}
      className={{
        modalContentStyles:
          "bg-black-4 border-grey-4 w-full max-w-[500px] rounded-3xl border p-6",
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-inter text-white-2 text-2xl font-bold">
            Edit Referral Code
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-70"
          >
            <Image src={crossIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-inter text-grey-15 text-base font-semibold">
            New Referral Code
          </label>
          <input
            type="text"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            placeholder="Enter your new referral code"
            className="border-grey-4 font-inter placeholder:text-grey-9 text-white-2 bg-black-5 focus:border-blue flex h-[50px] rounded-xl border-2 px-4 text-base font-normal focus:outline-none"
          />
        </div>

        <Button
          theme={IButtonTheme.AUTH_PRIMARY}
          className="w-full max-w-full"
          hoverEffect={IButtonHoverEffect.FADE}
          onClick={handleSave}
        >
          Save Changes
        </Button>

        <p className="font-inter text-grey-15 text-center text-sm">
          Your new referral code will also be your{" "}
          <span className="text-white-2 font-semibold">username</span>.
        </p>
      </div>
    </Modal>
  );
};
