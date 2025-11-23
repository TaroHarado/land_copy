import SearchIcon from "@/public/icons/loupe.svg?comp";
import NotificationIcon from "@/public/icons/notification.svg?comp";
import ShareIcon from "@/public/icons/share.svg?comp";
import StarIcon from "@/public/icons/star.svg?comp";
import { IEntry } from "../../../../../api/query/getLeaderBoard";
import styles from "../ui/Header.module.css";

export const useHeaderMockIcons = ({ activeUser }: { activeUser: IEntry }) => {
  const headerMockIcons = [
    {
      id: 1,
      icon: StarIcon,
      className: styles.star,
      onClick: () => {},
    },
    {
      id: 2,
      icon: NotificationIcon,
      onClick: () => {},
    },
    {
      id: 3,
      icon: ShareIcon,
      href: `https://polygonscan.com/address/${activeUser.address}`,
    },
    {
      id: 4,
      icon: SearchIcon,
      href: `https://x.com/search?q=${activeUser.address}=typed_query&f=live`,
    },
  ];

  return {
    headerMockIcons,
  };
};
