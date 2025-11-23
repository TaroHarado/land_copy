"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { useLoginWallet } from "../api/login/loginWallet";
import { useVerifyAccount } from "../api/verify/verifyAccount";
import { useGetWalletInfo } from "./getWalletInfo";
import { useHandleWalletActions } from "./walletActions";

export const useWalletActions = ({ onClose }: { onClose: () => void }) => {
  const [nonce, setNonce] = useState<string | null>(null);

  const { disconnect } = useDisconnect();
  const { connect, connectors, isSuccess } = useConnect();
  const { address } = useAccount();
  const {
    signMessage,
    isPending: isSignPending,
    data: signMessageData,
    failureReason,
  } = useSignMessage();

  const { getWalletInfo } = useGetWalletInfo();
  const { loginMutation } = useLoginWallet();
  const { verifyAccountMutation } = useVerifyAccount({ onClose });

  const { handleSignWallet, handleWalletSelect } = useHandleWalletActions({
    signMessage,
    address,
    connect,
    disconnect,
  });

  useEffect(() => {
    if (isSuccess && address) {
      loginMutation.mutate(
        {
          wallet_address: address,
        },
        {
          onSuccess: (data) => {
            setNonce(data.nonce);
            handleSignWallet(data.nonce);
          },
        },
      );
    }
  }, [isSuccess, address]);

  useEffect(() => {
    if (signMessageData) {
      verifyAccountMutation.mutate({
        wallet_address: address,
        signature: signMessageData,
      });
    }
  }, [signMessageData]);

  useEffect(() => {
    if (failureReason) {
      disconnect();
    }
  }, [failureReason]);

  return {
    nonce,
    handleWalletSelect,
    signMessageData,
    isSignPending,
    connectors,
    getWalletInfo,
    disconnect,
  };
};
