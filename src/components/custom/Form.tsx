"use client";
import React, { ReactElement, useEffect } from "react";
import { useActionState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { errorToast, sucessToast } from "./Toast";
import { BallLoading } from "./BallLoading";

interface Props {
  children: React.ReactNode;
  action: any;
  msg: string;
  msgButton: string;
  classN?: string;
  classBtn?: string;
  loading?: LoadingSettings;
}

interface LoadingSettings {
  bg?: string;
  size?: string; // 1-8
  fatherClass?: string; // optional className for the father div
  bgFirstSpan?: string; // optional className for the first span
  bgSecondSpan?: string;
}

export const Form = ({
  children,
  action,
  msg,
  msgButton,
  classN,
  classBtn = "w-full ",
  loading,
}: Props): ReactElement => {
  const [actionServer, setActionServer, isPending] = useActionState(action, {
    message: "",
    isValid: null,
    error: {
      message: "",
      status: 0,
    },
  });

  useEffect(() => {
    if (actionServer.isValid) {
      sucessToast(`${actionServer.message}  🎉`);
    }
    if (actionServer.error.message && !actionServer.isValid) {
      errorToast(`${actionServer.error.message} 😢`);
    }
  }, [actionServer]);
  return (
    <React.Fragment>
      <Toaster />
      <form action={setActionServer} className={` ${classN}`}>
        {children}
        {isPending ? (
          <BallLoading bg={loading?.bg} size={loading?.size} />
        ) : (
          <button
            disabled={isPending}
            className={`mt-5 rounded-sm py-1.5 hover:bg-zinc-200  bg-zinc-50 text-background-primary transition-all duration-300 ${classBtn}`}
          >
            Add {msgButton}
          </button>
        )}
      </form>
    </React.Fragment>
  );
};
