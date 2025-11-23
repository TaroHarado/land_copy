"use client";

import { queryClient } from "@/src/shared/api/config/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

import { Notification } from "@/src/shared/ui/Notification";
import { NotificationProvider } from "../../NotificationProvider";

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        {children}
        <Notification />
      </NotificationProvider>
    </QueryClientProvider>
  );
};
