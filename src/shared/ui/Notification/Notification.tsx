"use client";

import { useNotificationContext } from "@/src/app/providers/NotificationProvider";
import { FC } from "react";
import { NotificationItem } from "./components/NotificationItem";
import styles from "./Notification.module.css";

export const Notification: FC = () => {
  const { notifications } = useNotificationContext();

  return (
    <div className={styles.container}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};
