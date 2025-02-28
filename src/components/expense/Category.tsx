"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Expense } from "@/types/Expense";
import {
  getAllExpensesByYearAndMonth,
  getExpensesAtMonthByCategory,
} from "@/services/expense";
import { getMonthNumber } from "@/utils/MapMonth";
import { ExpensesByMonth } from "./ExpensesByMonth";
import { BallLoading } from "../custom/BallLoading";
export const CategoryExpense = (): ReactElement => {
  const [category, setCategory] = useState<string>("All");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const path = usePathname();

  const currentMonth: string = new Date().toLocaleString("en", {
    month: "long",
  });

  let monthUrl = path.split("/")[2];
  if (!monthUrl) monthUrl = currentMonth;

  function handleLoadingTime() {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    const fetchExpenses = async (): Promise<Expense[]> => {
      const monthNumber = getMonthNumber(monthUrl);
      if (category === "All") {
        const expenses: Expense[] = await getAllExpensesByYearAndMonth(
          new Number(monthNumber).valueOf(),
          new Date().getFullYear()
        );

        return expenses;
      }
      const expenses: Expense[] = await getExpensesAtMonthByCategory(
        category,
        new Date().getFullYear(),
        monthNumber
      );
      console.log(expenses);
      return expenses;
    };
    handleLoadingTime();

    fetchExpenses().then((expenses) => {
      setExpenses(expenses);
    });
  }, [category, path]);

  return (
    <React.Fragment>
      <article className="border-sm border-border-dark py-4 px-6 rounded-sm">
        <div className="flex justify-between mb-4">
          <div className="flex justify-between">
            <span>
              <strong>
                <p>{monthUrl} Expenses</p>
              </strong>
              <p className="text-xs text-zinc-400">Individual purchases</p>
            </span>
          </div>
          <div>
            <select
              className="mb-4 text-[0.70rem] py-2 w-24 bg-background-primary text-white border-2 border-border-dark border-double rounded-md outline-none focus:ring-2 focus:ring-zinc-500 "
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setLoading(true);
              }}
            >
              <option className="pt-20" value="All">
                All
              </option>
              <option value="ESSENTIAL">Essencial</option>
              <option value="NOT_ESSENTIAL">Not Essencial</option>
              <option value="LUXURY">Luxury</option>
            </select>
          </div>
        </div>
        <div >
          {loading && (
            <BallLoading
              bg={"none"}
              size={"size-2"}
              bgFirstSpan="bg-red-400"
              bgSecondSpan="bg-red-500"
            />
          )}
          {!loading && expenses.length === 0 && <p>No expenses found.</p>}
          {!loading && expenses.length > 0 && (
            <ExpensesByMonth expenses={expenses} />
          )}
        </div>
      </article>
    </React.Fragment>
  );
};
