import copeIcon from "@/public/icons/copy.svg";
import { useCopyText } from "@/src/shared/hooks/useCopyText";
import Image from "next/image";
import { FC, MouseEventHandler, RefObject } from "react";

interface SliderButtonProps {
  sliderRef: RefObject<HTMLDivElement | null>;
  buttonRef: RefObject<HTMLDivElement | null>;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
  dragPosition: number;
  privateKey:
    | {
        private_key: string;
      }
    | undefined;
}

export const SliderButton: FC<SliderButtonProps> = ({
  sliderRef,
  buttonRef,
  handleMouseDown,
  dragPosition,
  privateKey,
}) => {
  const { handleCopyText } = useCopyText();

  if (privateKey)
    return (
      <div className="bg-grey-3 flex items-center justify-between rounded-full px-6 py-3">
        <p className="max-w-[95%] text-2xl font-light break-all text-white">
          {privateKey?.private_key}
        </p>
        <button onClick={() => handleCopyText(privateKey?.private_key)}>
          <Image src={copeIcon} alt="copeIcon" width={20} height={20} />
        </button>
      </div>
    );

  return (
    <div className="bg-grey-3 flex items-center gap-8 rounded-full px-5 py-3">
      <p className="font-inter w-[270px] text-xl font-normal text-white">
        Click and drag to the right to reveal private key
      </p>
      <div
        ref={sliderRef}
        className="relative flex h-16 w-[358px] cursor-pointer items-center justify-center rounded-full bg-cyan-400 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        onMouseDown={handleMouseDown}
      >
        <div
          ref={buttonRef}
          className={`absolute flex h-[85%] w-[100px] cursor-grab items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600 shadow-md transition-all duration-200 hover:shadow-lg active:cursor-grabbing`}
          style={{
            left: dragPosition > 0 ? `${dragPosition}px` : "5px",
            transform: `translateX(calc(100% - 100px))`,
          }}
        />
        <p
          className={`font-inter text-blue-3 text-xl font-bold transition-all duration-300`}
        >
          {"Slide >>"}
        </p>
      </div>
    </div>
  );
};
