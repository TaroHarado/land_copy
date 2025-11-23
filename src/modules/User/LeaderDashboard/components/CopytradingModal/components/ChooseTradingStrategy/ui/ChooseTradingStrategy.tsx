import { useMeBalance } from "@/src/core/api/query/meBalance";
import {
  EBuyMethod,
  IUseCopyTradingForm,
} from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";
import { formatNumberInput } from "@/src/shared/functions/format/input/formatKey";
import { ErrorWrapper } from "@/src/shared/ui/ErrorWrapper";
import { IInputTheme, Input } from "@/src/shared/ui/Input";
import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { copyTradingStrategyMock } from "../../../mock/useCopyTradingStrategyMock";
import { TooltipButton } from "../components";
import { useSellModeButtons } from "../mock/useSellModeButtons";

interface chooseTradingStrategy {
  copyTradingStrategyMock: copyTradingStrategyMock[];
  setHoveredItem: Dispatch<SetStateAction<EBuyMethod | null>>;
  currentItem: copyTradingStrategyMock | null;
}

export const ChooseTradingStrategy = ({
  copyTradingStrategyMock,
  setHoveredItem,
  currentItem,
}: chooseTradingStrategy) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<IUseCopyTradingForm>();
  const { data: meBalance } = useMeBalance();
  const { sellModeButtons } = useSellModeButtons();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        {copyTradingStrategyMock.map((item) => (
          <TooltipButton
            key={item.id}
            item={item}
            currentItem={currentItem}
            setHoveredItem={setHoveredItem}
            watch={watch}
            setValue={setValue}
          />
        ))}
      </div>
      {watch("copy_mode") === EBuyMethod.FIXED_RATIO ? (
        <div className="flex flex-col gap-2.5">
          <div className="bg-grey-4 flex items-center gap-2 rounded-full px-5 py-4">
            <Input
              type="text"
              theme={IInputTheme.GREY_INPUT}
              placeholder="Fixed Ratio"
              {...register("buy_ratio", {
                required: "Ratio is required",
              })}
              onKeyDown={(e) => formatNumberInput(e, true)}
            />
            <p className="font-inter text-grey-5 text-base font-normal">%</p>
          </div>
          <ErrorWrapper error={errors.buy_max_amount?.message as string}>
            <div className="bg-grey-4 flex items-center gap-2 rounded-full px-5 py-4">
              <Input
                type="text"
                theme={IInputTheme.GREY_INPUT}
                placeholder="Max Buy Amount"
                {...register("buy_max_amount", {
                  required: "Max buy amount is required",
                  min: {
                    value: 1.2,
                    message: "Minimum ratio is 1.2",
                  },
                })}
                onKeyDown={(e) => formatNumberInput(e, true)}
              />
              <p className="font-inter text-grey-5 text-base font-normal">
                SOL
              </p>
            </div>
          </ErrorWrapper>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          <ErrorWrapper error={errors.buy_amount?.message as string}>
            <div className="bg-grey-4 flex items-center gap-2 rounded-full px-5 py-4">
              <Input
                type="text"
                theme={IInputTheme.GREY_INPUT}
                placeholder="Amount"
                {...register("buy_amount", {
                  required: "Amount is required",
                  max: {
                    value: meBalance?.total_balance ?? 0,
                    message: "Amount is greater than balance",
                  },
                  min: {
                    value: 1.1,
                    message: "Minimum amount is 1.1",
                  },
                })}
                onKeyDown={(e) => formatNumberInput(e, true)}
              />
              <p className="font-inter text-grey-5 text-base font-normal">
                USDC
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-inter text-grey-5 text-xs font-bold">
                =$x ({watch("buy_amount") || 0} USDC)
              </p>
              <p className="font-inter text-grey-5 text-xs font-bold">
                Bal: {meBalance?.total_balance ?? 0} USDC
              </p>
            </div>
          </ErrorWrapper>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <p className="font-inter text-white-2 text-xl font-bold">CopyTrade</p>
        <div className="grid grid-cols-2 gap-5">
          {sellModeButtons.map((button) => (
            <button
              key={button.id}
              className={twMerge(
                "border-black-4 font-inter text-grey-5 flex flex-1 items-center justify-center rounded-full border-2 py-[15px] text-center text-base font-bold transition-all duration-300",
                watch("sell_mode") === button.value && "border-blue",
              )}
              onClick={() => setValue("sell_mode", button.value)}
              type="button"
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
