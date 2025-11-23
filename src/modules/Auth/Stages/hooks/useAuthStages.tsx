import { FirstAuthStage, SecondAuthStage } from "../components";
import { ThirdAuthStage } from "../components/ThirdAuthStage/ui/ThirdAuthStage";

interface AuthStagesProps {
  currentStep: number;
}

export const useAuthStages = ({ currentStep }: AuthStagesProps) => {
  const stages = [
    {
      id: 1,
      children: <FirstAuthStage />,
    },
    {
      id: 2,
      children: <SecondAuthStage />,
    },
    {
      id: 3,
      children: <ThirdAuthStage />,
    },
  ];

  const currentStage = stages.find((stage) => stage.id === currentStep);

  return { currentStage };
};
