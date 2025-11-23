import logoIcon from "@/public/icons/logo/logo.svg";
import peopleIcon from "@/public/icons/people.svg";
import Image from "next/image";

export const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 z-10">
      <Image
        src={logoIcon}
        alt="logo"
        className="bg-grey h-[95px] w-[90px] rounded-xl"
      />
      <p className="font-inter text-white-2 text-2xl font-bold">tarogem</p>
      <div className="flex flex-col gap-2">
        <p className="font-inter text-white-2 text-4xl">3.5X Rewards</p>
        <div className="flex items-center gap-3">
          <p className="font-inter text-white-2 text-xl font-bold">
            30% Referral Rate
          </p>
          <div className="flex items-center gap-1">
            <Image src={peopleIcon} alt="peopleIcon" width={14} height={14} />
            <p className="font-inter font-bold text-2xl text-white-2">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
