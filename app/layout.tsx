import { MainProvider } from "@/src/app";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Onest } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const logoIcon = "/icons/logo/logo.svg";

export const metadata: Metadata = {
  title: "CopyTrade.gg",
  description: "CopyTrade.gg",
  icons: {
    icon: logoIcon,
    shortcut: logoIcon,
    apple: logoIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${onest.variable} ${inter.variable}`}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
