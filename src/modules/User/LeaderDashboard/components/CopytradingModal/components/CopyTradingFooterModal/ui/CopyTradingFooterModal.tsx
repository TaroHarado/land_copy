import arrowIcon from "@/public/icons/small-arrow.svg";
import { Button, IButtonTheme } from "@/src/shared/ui/Button";
import { IButtonSize } from "@/src/shared/ui/Button/types/button-types";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { useCopyTradingSettings } from "../../../mock/useCopyTradingSettings";

export const CopyTradingFooterModal = () => {
  const { copyTradingSettings, openMenu, setOpenMenu } =
    useCopyTradingSettings();
  const {
    formState: { isDirty }
  } = useFormContext();

  return (
    <div className="border-grey-4 flex flex-col gap-5 border-t p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          {copyTradingSettings.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Image src={item.icon} alt={'copy trading settings icon'} width={17} height={17} />
              <p className="font-inter text-grey-8 text-base font-bold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <button onClick={() => setOpenMenu(!openMenu)} type="button">
          <Image src={arrowIcon} alt="Arrow" width={17} height={17} />
        </button>
      </div>
      {openMenu && (
        <div className="flex flex-col gap-5">
          {copyTradingSettings.map((item) => (
            <div className="flex items-center justify-between" key={item.id}>
              <p className="font-inter text-grey-8 text-base font-normal">
                {item.settings.name}
              </p>
              {item.settings.components.map((components, index) => (
                <div key={index} className="flex gap-2.5 w-[300px]">
                  {components.firstComponent}
                  {components.secondComponent}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-5">
        <Button
          theme={IButtonTheme.AUTH_PRIMARY}
          size={IButtonSize.SMALL}
          className="w-full max-w-full p-4 text-base"
          type="submit"
          disabled={!isDirty}
        >
          Confirm
        </Button>
        <p className="font-inter text-grey-7 text-base font-normal">
          Note: Ensure your account has enough balance for auto trading to run
          smoothly.
        </p>
      </div>
    </div>
  );
};
