import { useRouter } from "next/navigation";

export const useNavigates = () => {
  const router = useRouter();

  const navigateToLink = ({ path, target }: { path: string, target?: string }) => {
    router.push(path,);
  };

  const navigateToTwitterWithParams = ({ wallet }: { wallet: string }) => {
    navigateToLink({ path: `https://x.com/search?q=${wallet}=typed_query&f=live` });
  };

  const navigateToPoligonScan = ({ wallet }: { wallet: string }) => {
    navigateToLink({ path: `https://polygonscan.com/address/${wallet}` });
  };

  return {
    navigateToLink,
    navigateToTwitterWithParams,
    navigateToPoligonScan,
  };
};
