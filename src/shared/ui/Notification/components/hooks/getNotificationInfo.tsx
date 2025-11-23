import SuccessCheckmarkIcon from "@/public/icons/notitifcations/check-mark-with-bg.svg?comp";
import { NotificationType } from "@/src/app/providers/NotificationProvider";

export const useGetNotificationInfo = () => {
  const getNotificationInfo = (notificationType: NotificationType) => {
    switch (notificationType) {
      case NotificationType.SUCCESS:
        return {
          icon: SuccessCheckmarkIcon,
        };
      case NotificationType.ERROR:
        return {
          icon: SuccessCheckmarkIcon,
        };
      case NotificationType.TRAIDER_NOTIFICATION:
        return {
          icon: SuccessCheckmarkIcon,
        };
      default:
        return {
          icon: SuccessCheckmarkIcon,
        };
    }
  };

  return { getNotificationInfo };
};
