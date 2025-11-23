import thinCrossIcon from "@/public/icons/thin-cross.svg";
import Image from "next/image";

interface header {
  onClose: () => void;
}

export const Header = ({ onClose }: header) => {
  return (
    <div className="border-grey-3 border-b">
      <div className="flex items-center justify-between gap-6 px-8 py-4">
        <p className="font-inter text-white-2 text-xl font-bold">CopyTrade</p>
        <button onClick={onClose}>
          <Image src={thinCrossIcon} alt="Thin Cross" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};
