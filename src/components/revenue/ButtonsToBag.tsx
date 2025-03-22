"use client";

import { deleteRevenue } from "@/services/api";
import { Pencil, Trash2 } from "lucide-react";
import { errorToast, sucessToast } from "../custom/Toast";
import { useState } from "react";
import { BallLoading } from "../custom/BallLoading";
export const ButtonsToBag = ({ id }: { id: string | undefined }) => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <BallLoading  bg="none" size="size-2" fatherClass="mt-4"/>;
  }
  return (
      <div className="w-full gap-4 flex justify-end items-center border-t-sm border-zinc-700 mt-2 pt-4">
        <button
          onClick={async () => {
            setLoading(true);
            const response = await deleteRevenue(id);
            await new Promise((resolve) => setTimeout(resolve, 250));
            if (response !== 404) {
              sucessToast(`Receita excluída com sucesso!`);
              setLoading(false);
            } else {
              errorToast(
                "Erro ao excluir receita! Tente novamente mais tarde."
              );
              setLoading(false);
            }
          }}
          className=""
          disabled={loading}
        >
          <span>
            <Trash2
              width={20}
              className="hover:text-red-600 transition-all duration-300 cursor-pointer"
            />
          </span>
        </button>
        <button className="">
          <Pencil
            width={20}
            className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
          />
        </button>
      </div>
  );
};



// components/SimpleLoader.js

  const  SimpleLoader = ({size = "h-8 w-8", color = "text-indigo-600" }) => {

  return (
    <div className="flex items-center justify-center">
      <svg
        className={`animate-spin ${size} ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}