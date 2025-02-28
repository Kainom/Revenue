import { Expense } from "@/types/Expense";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  expenses: Expense[];
}

export const ExpensesByMonth = ({ expenses }: Props): ReactElement => {
    
  return (
    <React.Fragment>
      {expenses.map((expense) => (
        <Link key={expense.id} href={`/expense/${expense.slug}`}>
          <div
            className="border-b-sm border-border-light py-2 cursor-pointer"
          >
            <span className="flex justify-between">
              <p className="text-sm overflow-hidden hover:text-red-600 transition-all duration-300  ">{expense.nome}</p>
              <p className="text-sm text-red-600"> -${expense.value}</p>
            </span>
            <span className="flex gap-4 items-center mt-2">
              <p className="text-xs text-zinc-400 ">
                {expense.dataCriacao.toLocaleString("en", { month: "long" })}{" "}
                {expense.dataCriacao.getDay()}
              </p>
              <p className="text-xs text-zinc-50 bg-zinc-800 px-3 py-0.5 rounded-lg hover:bg-zinc-700 transition-all duration-300">
                {expense.category}
              </p>
            </span>
          </div>
        </Link>
      ))}
    </React.Fragment>
  );
};