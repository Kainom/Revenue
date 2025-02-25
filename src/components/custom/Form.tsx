"use client";
import React, { ReactElement, useEffect } from "react";
import { useActionState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { errorToast, sucessToast } from "./Toast";
import { BallLoading } from "./BallLoading";

interface Props {
  children: React.ReactNode;
  action: any;
}

export const Form = ({ children, action }: Props): ReactElement => {
  const [actionServer, setActionServer, isPending] = useActionState(action, {
    message: "",
    isValid: null,
    error: {
      message: "",
      status: 0,
    },
  });

  useEffect(() => {
    if (actionServer.isValid ) {
      sucessToast("Expense registrado com sucesso! 🎉");
    }
    if (actionServer.error.message && !actionServer.isValid) {
      errorToast("Erro ao registrar expense! 😢");
    }
  }, [actionServer]);
  return (
    <React.Fragment>
      <Toaster />
      <form action={setActionServer}>
        {children}
        {isPending ? (
          <BallLoading />
        ) : (
          <button
            disabled={isPending}
            className="bg-zinc-50 text-background-primary w-full mt-5 rounded-sm py-1.5 hover:bg-zinc-200 transition-all duration-300"
          >
            Add Expense
          </button>
        )}
      </form>
    </React.Fragment>
  );
};
