"use client";

import checkMarkIcon from "@/public/icons/checkmark.svg";
import { cn } from "@/src/shared/lib";
import Image from "next/image";
import React, { FC } from "react";

interface ProgressIndicatorGlowProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
  isCompleted: boolean;
}

export const ProgressIndicator: FC<ProgressIndicatorGlowProps> = ({
  totalSteps,
  className = "",
  isCompleted,
  currentStep,
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isLast = index === totalSteps - 1;

        const isStepCompleted =
          (isCompleted && currentStep == stepNumber) ||
          stepNumber < currentStep;

        return (
          <React.Fragment key={stepNumber}>
            <div
              className={cn(
                "border-blue-1 relative flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 bg-transparent transition-all duration-300",
                {
                  ["border-blue-1 border"]: !isStepCompleted,
                },
              )}
            >
              {isStepCompleted && (
                <Image
                  src={checkMarkIcon}
                  alt="checkMarkIcon"
                  width={25}
                  height={17}
                />
              )}
            </div>

            {!isLast && (
              <div
                className={"h-0.5 w-12 bg-cyan-400 shadow-[0_0_4px_blue-1]"}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
