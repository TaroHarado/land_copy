"use client";

import { useMeInfo } from "@/src/core/api/query/meInfo";
import { AuthMainBlock } from "@/src/modules";
import { formatWallet } from "@/src/shared/functions/format/format-wallet";
import { AUTH_ROUTES } from "@/src/shared/lib/routes/routes";
import { useRouter } from "next/navigation";
import { useSetStage } from "../../../hooks/useSetStage";

export const FirstAuthStage = () => {
  const router = useRouter();

  const { data: meInfo } = useMeInfo();
  const { setStage } = useSetStage();

  return (
    <AuthMainBlock
      currentStep={1}
      title="Generate and download your"
      description="Polycopy trading wallet."
      buttonText="Continue"
      buttonAction={() => {
        router.push(`${AUTH_ROUTES.AUTH}/2`);
        setStage("2");
      }}
      isCompleted={true}
    >
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-grey-2 font-onest text-[24px] font-normal">
            You are logged in with
          </p>
          <p className="text-white-1 font-onest text-[24px] font-bold">
            {formatWallet(meInfo?.internal_wallet_address)}
          </p>
        </div>
        <p className="text-grey-2 font-onest w-11/12 text-center text-[24px] font-normal">
          Click continue to obtain your Polycope traiding wallet and private key
        </p>
      </div>
    </AuthMainBlock>
  );
};
