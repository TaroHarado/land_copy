export const formatWallet = (wallet: string | undefined) => {
  if (!wallet) return "Loading...";
  return `${wallet.slice(0, 10)}...${wallet.slice(-8)}`;
};