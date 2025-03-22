import { Expense } from "@/types/Expense";
import React, { ReactElement } from "react";
import { ButtonsExpense } from "./ButtonExpense";
import Link from "next/link";

interface Props {
  expenses: Expense[];
}

export const ExpensesByMonth = ({ expenses }: Props): ReactElement => {
  return (
    <React.Fragment>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="border-b-sm border-border-light py-2 cursor-pointer"
        >
          <Link href={`/expense/${expense.slug}`}>
            <span className="flex justify-between">
              <p className="text-sm overflow-hidden hover:text-red-600 transition-all duration-300  ">
                {expense.nome}
                {expense.parcela && (
                  <span>/{expense.parcela.quantidadeDeParcela}</span>
                )}
              </p>

              <p className="text-sm text-red-600"> -${expense.value}</p>
            </span>
          </Link>

          <div className="flex justify-between">
            <span className="flex gap-4 items-center mt-2">
              <p className="text-xs text-zinc-400 ">
                {expense.paymentDay.toLocaleString("en", { month: "long" })}{" "}
                {expense.paymentDay.getDate()}
              </p>
              <p className="text-xs text-zinc-50 bg-zinc-800 px-3 py-0.5 rounded-lg hover:bg-zinc-700 transition-all duration-300">
                {expense.category}
              </p>
            </span>
            <ButtonsExpense id={expense.id} />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
