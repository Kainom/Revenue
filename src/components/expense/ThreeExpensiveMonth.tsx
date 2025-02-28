import { getThreeMonthMostExpensive } from "@/services/expense";
import { ExpenseTotalMonth } from "@/types/Expense";
import { getNamedMonthOfDate } from "@/utils/sequenceTime";
import { ArrowUp } from "lucide-react";
import React, { ReactElement } from "react";

const currentYear: number = new Date().getFullYear();

export const ThreeExpensiveMonth = async (): Promise<ReactElement> => {
  const threeMostExpensive: ExpenseTotalMonth[] =
    await getThreeMonthMostExpensive(currentYear);

  return (
    <React.Fragment>
      {threeMostExpensive.map((month, index) => {
        return (
          <div
            key={month.id}
            className="border-sm pb-5 border-border-dark px-5 flex flex-col  rounded-sm"
          >
            <strong>
              <span className="flex items-center justify-between  bg-slate-00 pt-4">
                <p className="text-xs mb-1.5"># {index + 1} Expensive Month</p>
                <span className="mb-2">
                  <ArrowUp size={18} color="red" strokeWidth={1} />
                </span>
              </span>
              <p className="text-2xl">${month.total}</p>
            </strong>
            <p className="text-[0.65rem] text-zinc-400 ">
              {
                getNamedMonthOfDate(
                  month.id
                ) /* transform YYYY-MM to name month  */
              }
            </p>
          </div>
        );
      })}
    </React.Fragment>
  );
};
