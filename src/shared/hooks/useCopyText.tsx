import {
  NotificationType,
  useNotificationContext,
} from "@/src/app/providers/NotificationProvider";
import { useState } from "react";

export const useCopyText = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { addNotification } = useNotificationContext();

  const handleCopyText = async (text: string | undefined) => {
    if (!text) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        addNotification({
          message: "Copied to clipboard",
          type: NotificationType.SUCCESS,
        });
      } else {
        addNotification({
          message: "Clipboard not supported",
          type: NotificationType.ERROR,
        });
      }
    } catch (err) {
      addNotification({
        message: "Failed to copy text",
        type: NotificationType.ERROR,
      });
    }
  };

  return { isCopied, handleCopyText };
};
