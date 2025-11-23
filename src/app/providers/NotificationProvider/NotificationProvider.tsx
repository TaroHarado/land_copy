"use client";

import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  INotification,
  INotificationProps,
  NotificationContextType,
  NotificationDuration,
} from "./types/notificationContext";

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const addNotification = useCallback(
    ({ message, type, duration, content }: INotificationProps) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newNotification: INotification = { id, message, type, content };

      setNotifications((prev) => [...prev, newNotification]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, duration ?? NotificationDuration.SHORT);
    },
    [],
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within NotificationProvider",
    );
  }
  return context;
};
