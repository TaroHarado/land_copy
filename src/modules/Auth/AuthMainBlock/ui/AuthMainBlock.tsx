import logoWithBgIcon from "@/public/icons/logo/logo-with-bg.svg";
import { Button, IButtonHoverEffect, IButtonTheme } from "@/src/shared/ui/Button";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { ProgressIndicator, StarsBackground } from "../components";

interface AuthMainBlockProps {
  totalSteps?: number;
  title: string;
  description: string;
  isCompleted: boolean;
  currentStep: number;
  buttonText: string;
  isButtonDisabled?: boolean;
  buttonAction: () => void;
}

export const AuthMainBlock: FC<PropsWithChildren<AuthMainBlockProps>> = ({
  totalSteps = 3,
  title,
  description,
  children,
  buttonAction,
  buttonText = "Continue",
  isCompleted = false,
  isButtonDisabled = false,
  currentStep,
}) => {
  return (
    <div className="bg-black-2 relative">
      <div className="bg-blue-1/20 pointer-events-none absolute top-[220px] left-1/2 h-[300px] w-[800px] -translate-x-1/2 blur-[100px]" />
      <StarsBackground />
      <div className="relative z-[10px] flex min-h-screen flex-col items-center gap-8 overflow-hidden p-7">
        <ProgressIndicator
          currentStep={currentStep}
          isCompleted={isCompleted}
          totalSteps={totalSteps}
        />
        <Image
          src={logoWithBgIcon}
          alt="logoWithBgIcon"
          width={85}
          height={85}
          className="rounded-[35px] drop-shadow-[0_0_15px_#24DAFF] drop-shadow-[0_0_17px_rgba(0,223,254,0.6)] drop-shadow-[0_0_20px_rgba(36,218,255,0.8)]"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[30px] font-bold text-white">{title}</p>
            <p className="text-blue-1 text-[30px] font-bold">{description}</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
            {children}
            <Button
              onClick={buttonAction}
              theme={IButtonTheme.AUTH_PRIMARY}
              disabled={isButtonDisabled}
              className="w-[300px] p-4"
              hoverEffect={IButtonHoverEffect.FADE}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
