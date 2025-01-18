import { Expense } from "@/types/Expense";
import React, { ReactElement } from "react";

export interface Parm {
  expense: Expense[];
  filter: string;
}
export const Month = ({ expense, filter = "janeiro" }: Parm): ReactElement => {
  const total = expense.reduce((sum, expense) => {
    return sum + expense.valor;
  }, 0);

  const mes: string = 
  filter.charAt(0).toUpperCase() + filter.slice(1);
  return (
    <React.Fragment>
      <article className=" mt-5  p-4">
        <div className="flex justify-between bg-background-secondary rounded-md w-10/12 mx-auto p-6  text-3xl border-l-4 border-primary-600">
          <h1>{mes} Overview</h1>
          <p className="text-red-600"> -R${total}</p>
        </div>
        <ul className="w-10/12 mt-7 mx-auto">
          {expense.map((expense) => (
            <li
              className="bg-background-secondary border-l-4 border-red-600 rounded-md mt-5"
              key={expense.id}
            >
              <div className="py-2 px-8 flex items-center justify-between text-2xl gap-4 ">
                <div>
                  <p>{expense.nome}</p>
                  <p className="text-sm mt-1">
                    {new Date(expense.data).toLocaleString("pt-br", {
                      weekday: "long",
                    })}{" "}
                    {expense.data.getDate()}, {expense.data.getFullYear()}
                  </p>
                </div>
                <p className="text-red-600"> -R${expense.valor}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </React.Fragment>
  );
};
