import copyIcon from "@/public/icons/copy.svg";
import CrossIcon from "@/public/icons/cross.svg?comp";
import { useCopyText } from "@/src/shared/hooks/useCopyText";
import { classNames } from "@/src/shared/lib";
import { StickForBar } from "@/src/shared/ui/StickForBar";
import Image from "next/image";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { IEntry } from "../../../../../api/query/getLeaderBoard";
import { TraiderInfoForm } from "../../../hooks/useTraiderInfoForm";
import { useHeaderMockIcons } from "../mock/useHeaderMockIcons";
import { useTimeFIlters } from "../mock/useTimeFIlters";
import styles from "./Header.module.css";

export const Header = ({
  activeUser,
  onClose,
}: {
  activeUser: IEntry;
  onClose: () => void;
}) => {
  const { watch, setValue } = useFormContext<TraiderInfoForm>();
  const { handleCopyText } = useCopyText();
  const { headerMockIcons } = useHeaderMockIcons({ activeUser });
  const { timeFilters } = useTimeFIlters({ watch, setValue });

  return (
    <div className={styles.header}>
      <div className={styles.mainInfo}>
        {/* <p className={styles.mainInfoTitle}>
          {activeUser.address.slice(0, 8)}...{activeUser.address.slice(-4)}
        </p> */}
        <div className={styles.addressInfo}>
          <p className={styles.addressInfoText}>{activeUser.address}</p>
          <button onClick={() => handleCopyText(activeUser.address)}>
            <Image src={copyIcon} alt="Copy" width={16} height={16} />
          </button>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockIcons}>
          {headerMockIcons.map((icon) => {
            if (icon.onClick)
              return (
                <button onClick={icon.onClick} key={icon.id}>
                  <icon.icon
                    width={24}
                    height={24}
                    className={classNames(styles.icon, icon.className)}
                  />
                </button>
              );

            return (
              <Link key={icon.id} href={icon.href} target="_blank">
                <icon.icon
                  width={24}
                  height={24}
                  className={classNames(styles.icon, icon.className)}
                />
              </Link>
            );
          })}
        </div>
        <StickForBar />
        <div className={styles.infoBlockIcons}>
          {timeFilters.map((timeFilter) => (
            <button
              className={classNames(
                styles.timeFilter,
                timeFilter.activeTime && styles.activeTimeFilter,
              )}
              key={timeFilter.title}
            >
              {timeFilter.title}
            </button>
          ))}
          <StickForBar />
        </div>
        <button onClick={onClose}>
          <CrossIcon width={16} height={16} />
        </button>
      </div>
    </div>
  );
};
