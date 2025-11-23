import { INotification } from "@/src/app/providers/NotificationProvider/types/notificationContext";
import { useEffect, useState } from "react";

interface VisibleLogicProps {
  removeNotification: (id: string) => void;
  notification: INotification;
}

export const useVisibleLogic = ({
  removeNotification,
  notification,
}: VisibleLogicProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeNotification(notification.id);
    }, 300);
  };

  return {
    isVisible,
    isRemoving,
    handleClose,
  };
};
