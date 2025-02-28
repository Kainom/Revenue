import { getTotalExpenseAtYearAndMonth } from "@/services/expense";
import { ExpenseTotalMonth } from "@/types/Expense";
import { getMonthNumber } from "@/utils/MapMonth";
import { Calendar } from "lucide-react";
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
