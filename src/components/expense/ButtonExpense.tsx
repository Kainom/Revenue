"use client";

import { deleteRevenue } from "@/services/api";
import { Edit2,Pencil, Trash2 } from "lucide-react";
import { errorToast, sucessToast } from "../custom/Toast";
import { useState } from "react";
import { BallLoading } from "../custom/BallLoading";
import { deleteExpense } from "@/services/expense";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const ButtonsExpense = ({ id }: { id: string | undefined }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setLoading(true);
    const response = await deleteExpense(id);
      router.refresh();
    await new Promise((resolve) => setTimeout(resolve, 250));
    if (response !== 404) {
      sucessToast(`Expense excluído com sucesso!`);
      setLoading(false);
    } else {
      errorToast("Erro ao excluir Expense! Tente novamente mais tarde.");
      setLoading(false);
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <button>
        <Trash2
          onClick={handleDelete}
          className="hover:text-red-600 duration-300 transition-all"
          width={18}
        />
      </button>
      <Link href={`/expense/new-expense/${id}`}>
        <Edit2
          className="hover:text-blue-600 duration-300 transition-all"
          width={18}
        />
      </Link>
    </div>
  );
};

// components/SimpleLoader.js
