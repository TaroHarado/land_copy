import Image from "next/image";
import { useHowSiteWork } from "../mock/useHowSiteWork";

export const HowSiteWork = () => {
  const { howSiteWork } = useHowSiteWork();

  return (
    <div className="border-grey relative grid grid-cols-1 sm:grid-cols-2 rounded-xl sm:rounded-2xl lg:rounded-2xl border overflow-hidden">
      {howSiteWork.map((item, index) => (
        <div
          key={item.title}
          className={`flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-10 p-6 sm:p-8 md:p-10 lg:p-10 ${index % 2 === 0 && "sm:border-grey-1 sm:border-r lg:border-r"} ${index < 2 && "border-grey-1 border-b sm:border-b lg:border-b"} relative fade-in-up hover-lift transition-all duration-300 cursor-pointer`}
          style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
          <div className="bg-blue absolute top-1/2 left-1/2 h-[40px] w-[200px] sm:w-[300px] lg:w-[300px] -translate-x-1/2 blur-[800px] animate-pulse-glow" />
          <div className="z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-10 w-full group">
            <div className="hover-scale transition-transform duration-300">
              <Image 
                src={item.icon} 
                alt={item.title} 
                height={170}
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:h-[170px] lg:w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex min-h-[80px] sm:min-h-[100px] md:min-h-[118px] lg:h-[118px] flex-col gap-3 sm:gap-4 lg:gap-4 text-left w-full px-4 sm:px-0 group-hover:text-white-1 transition-colors duration-300">
              <p className="text-white-1 font-onest text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-normal break-words group-hover:text-blue transition-colors duration-300">
                {item.title}
              </p>
              <p className="text-grey font-onest text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal break-words group-hover:text-grey-2 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
