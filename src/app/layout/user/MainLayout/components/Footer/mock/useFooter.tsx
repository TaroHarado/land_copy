import bitcoinIcon from "@/public/icons/crypto/bitcoin.svg";
import ethereumIcon from "@/public/icons/crypto/ethereum.svg";
import solanaIcon from "@/public/icons/crypto/solana.svg";
import polygonIcon from "@/public/icons/link.svg";

export interface CryptoPrice {
  value: string;
  color: string;
  icon: string;
}

export const useFooter = () => {
  const cryptoPrices: CryptoPrice[] = [
    {
      value: "$0.18",
      color: "var(--color-green)",
      icon: polygonIcon,
    },
    {
      value: "$107.8K",
      color: "#F7931A",
      icon: bitcoinIcon,
    },
    {
      value: "$3713",
      color: "#627EEA",
      icon: ethereumIcon,
    },
    {
      value: "$175.39",
      color: "#00FF00",
      icon: solanaIcon,
    },
  ];

  return { cryptoPrices };
};
