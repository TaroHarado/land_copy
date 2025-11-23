import { ReactNode } from "react";

export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  TRAIDER_NOTIFICATION = "traiderNotification",
}

export enum NotificationDuration {
  SHORT = 2000,
  MEDIUM = 5000
}

export interface INotificationProps {
  message?: string;
  type: NotificationType;
  duration?:NotificationDuration | number;
  content?: ReactNode;
  closeButton?: true
}

export interface INotification extends INotificationProps {
  id: string;
}

export interface NotificationContextType {
  notifications: INotification[];
  addNotification: (props: INotificationProps) => void;
  removeNotification: (id: string) => void;
}
