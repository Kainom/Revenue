import React from "react";
import {
  getExpenseByMonth,
  getExpenseMonth,
} from "../../../../../lib/sequenceTime";
import { Month } from "@/components/expense/Month";
import { Expense } from "@/types/Expense";
import { MonthExpenseNav } from "@/components/expense/MonthExpenseNav";
import { notFound } from "next/navigation";

type Month = {
  params: Promise<{ filter: string }>;
};

export default async function MonthExpense({ params }: Month)  {
  let { filter } = await params;
  const months: string[] = getExpenseMonth();
  console.log(filter);
    const current: string = new Date().toLocaleString("en", {
      month: "long",
    });

  const expenses: Expense[] = getExpenseByMonth(filter?.[0] || current);
  if (!expenses.length) {
    notFound();
  }

  return (
    <React.Fragment>
      <MonthExpenseNav months={months} />
      <main>
        <Month expense={expenses} filter={filter?.[0] || current} />
      </main>
    </React.Fragment>
  );
}
