import Logo from "@/public/icons/logo/logo.svg";
import twitterIcon from "@/public/icons/socials/with-bg/twitter.svg";
import Image from "next/image";
import Link from "next/link";

export const InfoBlock = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-6">
      <div className="flex items-start gap-2 flex-shrink-0">
        <Image 
          src={Logo} 
          alt="Logo" 
          width={36} 
          height={40}
          className="w-7 h-8 sm:w-9 sm:h-10 lg:w-9 lg:h-10"
        />
        <p className="text-white-1 text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal whitespace-nowrap">Copytrade.gg</p>
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <Link
          href="https://x.com/copytrade_gg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src={twitterIcon} 
            alt="Twitter" 
            width={44} 
            height={44}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-11 lg:h-11"
          />
        </Link>
      </div>
    </div>
  );
};
