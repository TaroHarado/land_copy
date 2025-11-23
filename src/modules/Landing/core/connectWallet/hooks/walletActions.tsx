import { Config, Connector, CreateConnectorFn } from "wagmi";
import { ConnectMutate, SignMessageMutate } from "wagmi/query";

interface WalletActionsProps {
  signMessage: SignMessageMutate<unknown>;
  address: `0x${string}` | undefined;
  connect: ConnectMutate<Config, unknown>;
  disconnect: () => void;
}

export const useHandleWalletActions = ({
  signMessage,
  address,
  connect,
  disconnect,
}: WalletActionsProps) => {
  const handleWalletSelect = (connector: Connector<CreateConnectorFn>) => {
    connect({ connector });
    disconnect();
  };

  const handleSignWallet = async (nonceValue: string) => {
    await signMessage({
      message: nonceValue,
      account: address,
    });
  };

  return {
    handleWalletSelect,
    handleSignWallet,
  };
};
