"use server";

import { AUTH_ROUTES, USER_ROUTES } from "@/src/shared/lib/routes/routes";
import { NextRequest, NextResponse } from "next/server";

interface IIsOnAuthPage {
  isPrivateKeyShown: boolean | undefined;
  hasTokens: boolean;
  pathname: string;
  completedStage: string | undefined;
  isOnAuthPage: boolean;
  request: NextRequest;
}

export const isOnAuthPageCondition = ({
  isPrivateKeyShown,
  hasTokens,
  pathname,
  completedStage,
  isOnAuthPage,
  request,
}: IIsOnAuthPage) => {
  if (isOnAuthPage) {
    if (isPrivateKeyShown) {
      return NextResponse.redirect(
        new URL(USER_ROUTES.TOP_TRADERS, request.url),
      );
    }
    if (!hasTokens) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const stageMatch = pathname.match(/^\/auth\/(\d+)$/);
    const currentStage = stageMatch ? Number(stageMatch[1]) : null;
    const completed = completedStage ? Number(completedStage) : null;

    if (completed === 1) {
      if (currentStage !== 1) {
        return NextResponse.redirect(
          new URL(`${AUTH_ROUTES.AUTH}/1`, request.url),
        );
      }
    } else if (completed === 2) {
      if (currentStage !== 2) {
        return NextResponse.redirect(
          new URL(`${AUTH_ROUTES.AUTH}/2`, request.url),
        );
      }
    } else if (completed === 3) {
      if (currentStage !== 3) {
        return NextResponse.redirect(
          new URL(`${AUTH_ROUTES.AUTH}/3`, request.url),
        );
      }
    }

    return NextResponse.next();
  }
};
