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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteExpense,setDeleteExpense] = useState<boolean>(false);
  const itemsPerPage = 4;

  const path = usePathname();

  const currentMonth: string = new Date().toLocaleString("en", {
    month: "long",
  });

  let monthUrl = path.split("/")[3];

  if (!monthUrl) {
    monthUrl = currentMonth;
  }

  function handleLoadingTime() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    const fetchExpenses = async (): Promise<Expense[]> => {
      const monthNumber = getMonthNumber(monthUrl);
      if (category === "All") {
        const expenses: Expense[] = await getAllExpensesByYearAndMonth(
          Number(monthNumber).valueOf(),
          new Date().getFullYear()
        );

        return expenses;
      }
      const expenses: Expense[] = await getExpensesAtMonthByCategory(
        category,
        new Date().getFullYear(),
        monthNumber
      );
      return expenses;
    };
    handleLoadingTime();

    fetchExpenses().then((expenses) => {
      setExpenses(expenses);
      setCurrentPage(1);
    });
  }, [category, path,deleteExpense]);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);
  const paginatedExpenses = expenses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

   const total : number = expenses
    .reduce((total,item) => total + item.value,0)

  return (
    <React.Fragment>
      <article className="border-sm border-border-dark pt-4 pb-0 px-6 rounded-sm grid grid-cols-1 ">
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
        <div>
          {loading && (
            <BallLoading
              bg={"none"}
              size={"size-2"}
              bgFirstSpan="bg-red-400"
              bgSecondSpan="bg-red-500"
            />
          )}
          {!loading && expenses.length === 0 && (
            <p className="text-center text-2xl">No expenses found.</p>
          )}
          {!loading && expenses.length > 0 && (
            <>
              <ExpensesByMonth
                expenses={paginatedExpenses}
                total={total}
                onDeleteExpense={() => setDeleteExpense((prev) => !prev)}
              />

              <div
                className={`flex justify-center gap-4 mt-4 mb-4 items-center ${paginatedExpenses.length === 1 ? "mt-14" : ""}`}
              >
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-zinc-800 text-white rounded disabled:opacity-50"
                >
                  Anterior
                </button>
                <span className="text-sm text-zinc-400">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-zinc-800 text-white rounded disabled:opacity-50"
                >
                  Próxima
                </button>
              </div>
            </>
          )}
        </div>
      </article>
    </React.Fragment>
  );
};
