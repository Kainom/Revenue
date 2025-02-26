import {
  getAllTotalExpensesByYear,
  getThreeMonthMostExpensive,
} from "@/services/expense";
import { ExpenseTotalMonth } from "@/types/Expense";
import { getMonthNumber } from "@/utils/MapMonth";
import { getNamedMonthOfDate } from "@/utils/sequenceTime";
import { getTotalExpenseByMonth } from "@/utils/TotalGet";
import { ArrowUp, Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { ReactElement } from "react";

//o interesse aqui esta no id do expenseTotal que por sua vez é o ano e mes
// nesse caso pode ser buscada uma unica vez vida o 
const expenses: ExpenseTotalMonth[] = await getAllTotalExpensesByYear(
  new Date().getFullYear()
);

export const TotalExpenseMonth = async ({
  filter,
}: {
  filter: string;
}): Promise<ReactElement> => {
  const currentYear: number = new Date().getFullYear();
  const yearAndMonth: string = `${currentYear}-${getMonthNumber(filter)}`;

  // eu busquei todos os expenses por ano em cima,no escopo de modulo,evitando buscar a cada renderizaçao
  // essa funçao busca o total de um mes especifico,passado pela rota optativa,sequer busca no backend
  // evitando assim,um request desnecessario
  const currentMonthTotal: ExpenseTotalMonth = getTotalExpenseByMonth(
    expenses,
    yearAndMonth
  );
  if (!expenses.length) {
    notFound();
  }
  return (
    <React.Fragment>
      <div className="border-sm pb-5 border-border-dark px-5 flex flex-col  rounded-sm">
        <strong>
          <span className="flex items-center justify-between  bg-slate-00 pt-4">
            <p className="text-xs mb-1.5">Monthly Total</p>
            <span className="mb-2">
              <Calendar width={18} />
            </span>
          </span>
          <p className="text-2xl">{currentMonthTotal.total}</p>
        </strong>
        <p className="text-[0.65rem] text-zinc-400">
          Total expenses for {filter}
        </p>
      </div>
    </React.Fragment>
  );
};
