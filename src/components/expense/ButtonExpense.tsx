"use client";

import { Edit2, Pencil, Trash2 } from "lucide-react";
import { errorToast, sucessToast } from "../custom/Toast";
import { useState } from "react";
import { deleteExpense } from "@/services/expense";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ButtonsExpenseProps {
  id: string | undefined; // O ID da despesa a ser excluída
  onDeleteExpense: () => void; // A função de callback para o avô
}

export const ButtonsExpense = ({
  id,
  onDeleteExpense,
}: ButtonsExpenseProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setLoading(true);

    const response = await deleteExpense(id);

    if (response !== 404) {
      sucessToast("Expense excluído com sucesso!");

      // pequeno delay só para UX (opcional)
      await new Promise((r) => setTimeout(r, 300));

      onDeleteExpense(); // força refetch
    } else {
      errorToast("Erro ao excluir Expense! Tente novamente.");
    }

    setLoading(false);
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
