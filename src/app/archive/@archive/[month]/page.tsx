
import React from "react";
import { getExpenseByMonth } from "../../../../../lib/sequenceTime";
import { Month } from "@/components/Month";
import { Expense } from "@/types/Expense";

type Month = {
    params: Promise<{ month: string }>;
  };

  
export default async function MonthExpense({params}:Month){
    const { month } = await params;
    const expenses:Expense[] = getExpenseByMonth(month);
    console.log(expenses);
    return (
        <React.Fragment>
       <main>
            <Month expense={expenses} month={month} />
       </main>
        </React.Fragment>
    )
}