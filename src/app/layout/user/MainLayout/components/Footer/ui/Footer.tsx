import dogEmoji from "@/public/icons/emoji/dog.svg";
import emoji1 from "@/public/icons/emoji/emoji1.svg";
import pillEmoji from "@/public/icons/emoji/pill.svg";
import presetIcon from "@/public/icons/settings-with-lines.svg";
import telegramIcon from "@/public/icons/socials/with-bg/square-telegram.svg";
import ThreeStatsLinesIcon from "@/public/icons/three-stats-lines.svg?comp";
import WhiteWalletIcon from "@/public/icons/white-wallet.svg?comp";
import { StickForBar } from "@/src/shared/ui/StickForBar";
import Image from "next/image";
import { useFooter } from "../mock/useFooter";
import styles from "./Footer.module.css";

export const Footer = () => {
  const { cryptoPrices } = useFooter();

  return (
    <div
      className="border-grey-4 bg-black-2 sticky bottom-0 flex justify-between gap-3.5 border-t px-6 py-1 "
      style={{ marginTop: "auto", zIndex: "var(--z-index-global)" }}
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <button className="font-inter text-blue-5 bg-blue-4 flex items-center gap-2 rounded-[4px] px-2.5 py-2 text-[12px] font-bold">
            <Image src={presetIcon} alt="presetIcon" width={16} height={16} />
            PRESET 1
          </button>
          <StickForBar />
        </div>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2">
            <WhiteWalletIcon
              width={16}
              height={16}
              className={styles.walletIcon}
            />
            <p className="font-inter text-grey-10 text-[12px] font-bold">
              Wallet
            </p>
          </button>
          <button className="flex items-center gap-2">
            <ThreeStatsLinesIcon
              width={16}
              height={16}
              className={styles.icon}
            />
            <p className="font-inter text-grey-10 text-[12px] font-bold">PnL</p>
          </button>
          <StickForBar />
          <div className="flex items-center gap-2.5">
            <Image src={emoji1} alt="emoji1" width={16} height={16} />
            <Image src={pillEmoji} alt="pillEmoji" width={16} height={16} />
            <Image src={dogEmoji} alt="dogEmoji" width={16} height={16} />
          </div>
          <StickForBar />
        </div>
        <div className="flex items-center gap-5">
          {cryptoPrices.map((item) => (
            <div key={item.value} className="flex items-center gap-2.5">
              <Image src={item.icon} alt={item.value} width={16} height={16} />
              <p
                className="font-inter text-[12px] font-bold"
                style={{ color: item.color }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3.5">
        <button className="bg-green-1 text-green font-inter flex items-center gap-2 rounded-[4px] px-2.5 py-1.5 text-[12px] font-normal">
          <div className={styles.statusIndicator}></div>
          Connection is stable
        </button>
        <StickForBar />
        <div className="flex items-center gap-3">
          <Image src={telegramIcon} alt="Telegram" width={16} height={16} />
          <button className="font-inter text-grey-11 text-[12px] font-normal">
            Docs
          </button>
        </div>
      </div>
    </div>
  );
};
