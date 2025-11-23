import crossIcon from "@/public/icons/cross.svg";
import { useRefreshTokens } from "@/src/core/api/mutate/refreshTokens";
import { AUTH_ROUTES } from "@/src/shared/lib/routes/routes";
import { Modal } from "@/src/shared/ui/Modal";
import { EModalPosition } from "@/src/shared/ui/Modal/Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FinalSaveChanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinalSaveChanceModal = ({
  isOpen,
  onClose,
}: FinalSaveChanceModalProps) => {
  const router = useRouter();
  const { refreshTokensMutation } = useRefreshTokens();

  const handleRefreshTokens = () => {
    refreshTokensMutation.mutate();
    router.push(`${AUTH_ROUTES.AUTH}/3`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={EModalPosition.MODAL_POSITION_CENTER}
    >
      <div className="flex w-[700px] flex-col rounded-4xl border p-16 bg-white/5 shadow-2xl backdrop-blur-xl">
        <button onClick={onClose} className="absolute top-8 right-8">
          <Image src={crossIcon} alt="crossIcon" width={15} height={15} />
        </button>
        <div className="flex flex-col items-center gap-10">
          <p className="font-inter text-2xl font-bold text-white">
            FINAL CHANCE TO SAVE PRIVATE KEY
          </p>
          <p className="text-grey-2 font-inter text-2xl font-normal">
            You will not be able to retire it again.
          </p>
          <div className="flex w-full items-center justify-center gap-5">
            <button
              onClick={onClose}
              className="bg-grey-3 font-inter max-w-[180px] flex-[0.5] rounded-full py-3.5 text-xl font-normal text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleRefreshTokens}
              className="bg-blue-1 font-inter text-blue-3 max-w-[255px] flex-1 rounded-full py-3.5 text-xl font-bold"
            >
              I already saved it
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
