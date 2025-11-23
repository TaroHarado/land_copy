import Image from "next/image";
import { HowSiteWork } from "../HowSiteWork/ui/HowSiteWork";
import { InfoBlock } from "../InfoBlock/ui/InfoBlock";
import { TextBlock } from "../TextBlock/ui/TextBlock";

export const LandingPage = () => {
  return (
    <div className="bg-black-2">
      <div className="m-auto flex max-w-[1512px] flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-10 p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="fade-in-up delay-100">
          <InfoBlock />
        </div>
        <div className="w-full lg:w-auto flex items-center justify-center opacity-50 lg:ml-auto fade-in-up delay-200">
          <Image
            src="/415.svg"
            alt="Landing Image"
            width={960}
            height={720}
            className="w-full h-auto max-w-full sm:max-w-md md:max-w-lg lg:w-auto lg:max-w-none"
            priority
          />
        </div>
        <div className="fade-in-up delay-300">
          <TextBlock />
        </div>
        <HowSiteWork />
      </div>
    </div>
  );
};
