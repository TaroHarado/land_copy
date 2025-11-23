"use client";

import copeIcon from "@/public/icons/copy.svg";
import { useSetAllowance } from "@/src/core/api/mutate/setAllowance";
import { useMeInfo } from "@/src/core/api/query/meInfo";
import { AuthMainBlock } from "@/src/modules/Auth/AuthMainBlock/ui/AuthMainBlock";
import { useCopyText } from "@/src/shared/hooks/useCopyText";
import { USER_ROUTES } from "@/src/shared/lib/routes/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ThirdAuthStage = () => {
  const { data: meInfo } = useMeInfo();
  const { handleCopyText } = useCopyText();

  const { setAllowance } = useSetAllowance();

  const router = useRouter();

  const handleRefreshTokens = () => {
    router.push(USER_ROUTES.TOP_TRADERS);
    setAllowance.mutate();
  };

  return (
    <AuthMainBlock
      currentStep={3}
      title="Generate and download your"
      description="Polycopy trading wallet."
      buttonText="Continue"
      buttonAction={handleRefreshTokens}
      isCompleted={true}
    >
      <div className="flex flex-col items-center gap-12">
        <div className="flex w-[700px] flex-col items-center gap-1">
          <div className="font-inter text-grey-2 text-2xl font-normal">
            Oops! Your polycopy trading wallet has{" "}
            <span className="font-medium text-white underline">0 POL</span>
          </div>
          <p className="font-inter text-grey-2 text-2xl font-normal">
            Deposit POL to this wallet to start trading
          </p>
        </div>
        <div className="bg-grey-3 flex items-center justify-between rounded-full px-6 py-3 gap-3">
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
    </AuthMainBlock>
  );
};
