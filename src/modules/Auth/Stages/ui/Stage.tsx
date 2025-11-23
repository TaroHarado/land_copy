"use client";

import { useAuthStages } from "../hooks/useAuthStages";

interface StageProps {
  currentStep: number;
}

export const Stage = ({ currentStep }: StageProps) => {
  const { currentStage } = useAuthStages({ currentStep });

  return <>{currentStage?.children}</>;
};
