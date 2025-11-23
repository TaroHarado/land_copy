"use client";

import caseIcon from "@/public/icons/case.svg";
import coinIcon from "@/public/icons/coin.svg";
import linkIcon from "@/public/icons/link.svg";
import logoIcon from "@/public/icons/logo/logo.svg";
import NotificationIcon from "@/public/icons/notification.svg?comp";
import profileIcon from "@/public/icons/user.svg";
import whiteWalletIcon from "@/public/icons/white-wallet.svg";
import { formatMoney } from "@/src/shared/functions/format/format-money";
import { Button, IButtonTheme } from "@/src/shared/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useHeaderLinks } from "../mock/useHeaderLinks";
import styles from "./Header.module.css";

export const Header = () => {
  const { headerLinks } = useHeaderLinks();

  return (
    <div
      className="bg-black-2 sticky top-0 flex items-center justify-between px-8 py-3"
      style={{ zIndex: "var(--z-index-global)" }}
    >
      <div className="flex items-center gap-3">
        <Image src={logoIcon} alt="logo" width={40} height={40} />
        <div className="flex items-center gap-8">
          {headerLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={twMerge(
                "text-white-2 font-inter hover:text-blue text-xl font-normal transition-all duration-300",
                link.active && "text-blue font-semibold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button theme={IButtonTheme.AUTH_PRIMARY} className="w-fit px-6 py-2.5">
          Deposite
        </Button>
        <button className="bg-black-4 hover:bg-black-3 flex h-[48px] w-[48px] rounded-full p-3 transition-all duration-300">
          <NotificationIcon width={24} height={24} className={styles.icon} />
        </button>
        <div className="bg-black-4 flex items-center gap-2.5 rounded-full p-3 px-6">
          <Image src={caseIcon} alt="User" width={24} height={24} />
          <p className="font-inter text-white-2 text-xl font-bold">
            {formatMoney({ money: 13131 })}
          </p>
        </div>
        <div className="bg-black-4 flex items-stretch rounded-full">
          <div className="flex items-center gap-5 p-3 px-6">
            <Image
              src={whiteWalletIcon}
              alt="White Wallet"
              width={24}
              height={24}
            />
            <div className="flex gap-2">
              <Image src={coinIcon} alt="Coin" width={24} height={24} />
              <p className="font-inter text-white-2 text-xl font-bold">
                {formatMoney({ money: 0.024 })}
              </p>
            </div>
          </div>
          <div className="bg-black-2 w-0.5" />
          <div className="flex items-center gap-2 p-3 px-6">
            <Image src={linkIcon} alt="Link" width={24} height={24} />
            <p className="font-inter text-white-2 text-xl font-bold">0.123</p>
          </div>
        </div>
        <button className="bg-black-4 hover:bg-black-3 flex h-[48px] w-[48px] rounded-full p-3 transition-all duration-300">
          <Image src={profileIcon} alt="profile" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
