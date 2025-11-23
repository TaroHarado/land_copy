import { USER_ROUTES } from "@/src/shared/lib/routes/routes";
import { usePathname } from "next/navigation";

export const useHeaderLinks = () => {
  const pathname = usePathname();

  const headerLinks = [
    {
      label: "Discover",
      href: USER_ROUTES.DISCOVER,
      active: pathname === USER_ROUTES.DISCOVER,
    },
    {
      label: "CopyTrade",
      href: USER_ROUTES.TOP_TRADERS,
      active: pathname === USER_ROUTES.TOP_TRADERS,
    },
    {
      label: "Monitor",
      href: USER_ROUTES.MONITOR,
      active: pathname === USER_ROUTES.MONITOR,
    },
    {
      label: "Track",
      href: USER_ROUTES.TRACK,
      active: pathname === USER_ROUTES.TRACK,
    },
    {
      label: "Portfolio",
      href: USER_ROUTES.PORTFOLIO,
      active: pathname === USER_ROUTES.PORTFOLIO,
    },
    {
      label: "Rewards",
      href: USER_ROUTES.REWARDS,
      active: pathname === USER_ROUTES.REWARDS,
    },
  ];

  return {
    headerLinks,
  };
};
