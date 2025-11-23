import questionMarkIcon from "@/public/icons/question-mark.svg";
import {
  EBuyMethod,
  IUseCopyTradingForm,
} from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { UseFormSetValue } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { copyTradingStrategyMock } from "../../../../mock/useCopyTradingStrategyMock";

interface TooltipButtonProps {
  item: copyTradingStrategyMock;
  currentItem: copyTradingStrategyMock | null;
  setHoveredItem: Dispatch<SetStateAction<EBuyMethod | null>>;
  watch: (name: keyof IUseCopyTradingForm) => any;
  setValue: UseFormSetValue<IUseCopyTradingForm>;
}

export const TooltipButton = ({
  item,
  currentItem,
  setHoveredItem,
  watch,
  setValue,
}: TooltipButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  useEffect(() => {
    if (currentItem && currentItem.id === item.id && buttonRef.current) {
      const updatePosition = () => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const tooltipWidth = 300;

        const buttonRight = rect.right;

        let left = buttonRight - tooltipWidth;

        const viewportLeft = 20;

        if (left < viewportLeft) {
          left = viewportLeft;
        }

        setPosition({
          top: rect.top + window.scrollY,
          left: left + window.scrollX,
        });
      };

      updatePosition();
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    } else {
      setPosition(null);
    }
  }, [currentItem, item.id]);

  const isActive = currentItem && currentItem.id === item.id;

  return (
    <>
      <div className="flex flex-1">
        <button
          ref={buttonRef}
          className={twMerge(
            "border-black-4 font-inter text-grey-5 hover:bg-grey-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 py-3 text-base font-bold transition-all duration-300",
            watch("copy_mode") === item.mode &&
              "border-blue cursor-default hover:bg-transparent",
          )}
          onClick={() => {
            setValue("copy_mode", item.mode);
            if (item.mode !== EBuyMethod.FIXED_RATIO) {
              setValue("buy_ratio", null);
              setValue("buy_max_amount", null);
            }
          }}
          type="button"
          style={{
            cursor: watch("copy_mode") === item.mode ? "default" : "pointer",
          }}
        >
          <p className="w-[134px]">{item.name}</p>
          <div
            onMouseEnter={() => setHoveredItem(item.mode)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              src={questionMarkIcon}
              alt="Question Mark"
              width={17}
              height={17}
            />
          </div>
        </button>
      </div>
      {isActive &&
        position &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="bg-grey-4 fixed z-[9999] flex w-[500px] flex-col items-start justify-center gap-1 rounded-xl px-5 py-4"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              animation: "fadeInUpCentered 0.3s ease-out forwards",
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            <p className="font-inter text-xl font-normal text-white">
              {currentItem.name}
            </p>
            <p className="font-inter text-grey-2 text-base font-medium">
              {currentItem.description}
            </p>
          </div>,
          document.body,
        )}
    </>
  );
};
