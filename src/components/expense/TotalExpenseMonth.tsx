import { getTotalExpenseAtYearAndMonth } from "@/services/expense";
import { ExpenseTotalMonth } from "@/types/Expense";
import { getMonthNumber } from "@/utils/MapMonth";
import { Calendar, TrendingDown } from "lucide-react";
import React, { ReactElement } from "react";

const currentYear: number = new Date().getFullYear();

export const TotalExpenseMonth = async ({
  filter,
}: {
  filter: string;
}): Promise<ReactElement> => {
  const currentMonthTotal: ExpenseTotalMonth =
    await getTotalExpenseAtYearAndMonth(currentYear, getMonthNumber(filter));

  return (
    <React.Fragment>
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border-sm border-border-dark rounded-sm p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-medium">Monthly Total</p>
              <p className="text-[0.65rem] text-zinc-500">{filter}</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
            <TrendingDown className="w-4 h-4 text-red-400" />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-3xl font-bold text-white">
            R$ {currentMonthTotal.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-zinc-500">
            Total expenses this month
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};