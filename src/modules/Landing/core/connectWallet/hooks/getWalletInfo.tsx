import metamaskIcon from "@/public/icons/wallets/meta-mask.svg";
import walletConnectIcon from "@/public/icons/wallets/wallet-connect.svg";
import { Connector, CreateConnectorFn } from "wagmi";

export const useGetWalletInfo = () => {
  const getWalletInfo = (connector: Connector<CreateConnectorFn>) => {
    if (connector.id === "metaMaskSDK") {
      return {
        icon: metamaskIcon,
        description: "Connect to your MetaMask wallet",
        ...connector,
      };
    }
    if (connector.id === "walletConnect") {
      return {
        icon: walletConnectIcon,
        description: "Connect to your WalletConnect wallet",
        ...connector,
      };
    }
  };

  return {
    getWalletInfo,
  };
};
