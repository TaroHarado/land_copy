"use client";

import { useNotificationContext } from "@/src/app/providers/NotificationProvider";
import { INotification } from "@/src/app/providers/NotificationProvider/types/notificationContext";
import classNames from "@/src/shared/lib/classNames";
import { FC } from "react";
import { useGetNotificationInfo } from "./hooks/getNotificationInfo";
import { useVisibleLogic } from "./hooks/visibleLogic";
import styles from "./NotificationItem.module.css";

interface NotificationItemProps {
  notification: INotification;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  notification,
}) => {
  const { removeNotification } = useNotificationContext();
  const { isVisible, isRemoving, handleClose } = useVisibleLogic({
    removeNotification,
    notification,
  });
  const { getNotificationInfo } = useGetNotificationInfo();

  const NotificationItemIcon = getNotificationInfo(notification.type)?.icon;

  return (
    <div
      className={classNames(styles.notification, styles[notification.type], {
        [styles.visible]: isVisible,
        [styles.removing]: isRemoving,
      })}
    >
      <div className={styles.content}>
        {notification.content ? (
          <div className={styles.customContent}>{notification.content}</div>
        ) : (
          <div className={styles.notificationMainContent}>
            <NotificationItemIcon />
            <span className={styles.message}>{notification.message}</span>
          </div>
        )}
        {notification.closeButton && (
          <button className={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        )}
      </div>
    </div>
  );
};
