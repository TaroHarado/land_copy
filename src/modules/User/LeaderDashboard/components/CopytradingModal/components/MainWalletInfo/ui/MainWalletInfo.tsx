import coinIcon from "@/public/icons/coin.svg";
import walletIcon from "@/public/icons/wallet.svg";
import { useMeInfo } from "@/src/core/api";
import { IUseCopyTradingForm } from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";
import { formatWallet } from "@/src/shared/functions/format/format-wallet";
import { ErrorWrapper } from "@/src/shared/ui/ErrorWrapper";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

export const MainWalletInfo = () => {
  const { data: meInfo } = useMeInfo();
  const {
    register,
    formState: { errors },
  } = useFormContext<IUseCopyTradingForm>();

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-grey-4 flex justify-between rounded-2xl px-5 py-4">
        <div className="flex items-center gap-2">
          <Image src={walletIcon} alt="Wallet" width={17} height={17} />
          <p className="font-inter text-grey-5 text-base font-bold">Walle..</p>
          <p className="font-inter text-grey-5 text-base font-normal">
            {formatWallet(meInfo?.internal_wallet_address)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={coinIcon} alt="Coin" width={20} height={20} />
          <p className="font-inter text-grey-6 text-lg font-bold">0.024</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-inter text-white-2 text-lg font-bold">Copy from</p>
        <ErrorWrapper error={errors.target_address?.message as string}>
          <input
            type="text"
            className="border-black-4 font-inter placeholder:text-grey-1 text-white-2 flex h-[50px] rounded-full border-2 px-5 text-base font-normal"
            placeholder="Wallet address"
            {...register("target_address", {
              required: "Wallet address is required",
              maxLength: {
                value: 42,
                message: "Wallet address is too long",
              },
              minLength: {
                value: 42,
                message: "Wallet address is too short",
              },
            })}
          />
        </ErrorWrapper>
      </div>
    </div>
  );
};
