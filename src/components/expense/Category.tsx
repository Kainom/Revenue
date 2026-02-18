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
import { SmoothLoading } from "../custom/SmoothLoading";

export const CategoryExpense = (): ReactElement => {
  const [category, setCategory] = useState("All");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteExpense, setDeleteExpense] = useState(false);

  const itemsPerPage = 4;
  const path = usePathname();

  const currentMonth = new Date().toLocaleString("en", { month: "long" });
  const monthUrl = path.split("/")[3] || currentMonth;

  useEffect(() => {
    const fetchExpenses = async () => {
      const monthNumber = getMonthNumber(monthUrl);

      if (category === "All") {
        return getAllExpensesByYearAndMonth(
          Number(monthNumber),
          new Date().getFullYear(),
        );
      }

      return getExpensesAtMonthByCategory(
        category,
        new Date().getFullYear(),
        monthNumber,
      );
    };

    setLoading(true);

    fetchExpenses().then((data) => {
      setExpenses(data);
      setCurrentPage(1);
      setLoading(false);
    });
  }, [category, path, deleteExpense]);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  const paginatedExpenses = expenses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const total = expenses.reduce((sum, item) => sum + item.value, 0);

  const getCategoryBadge = (cat: string) => {
    const badges = {
      All: { label: "Todas", color: "bg-zinc-700/50 text-zinc-300" },
      ESSENTIAL: { label: "Essenciais", color: "bg-blue-500/20 text-blue-400" },
      NOT_ESSENTIAL: {
        label: "Não essenciais",
        color: "bg-amber-500/20 text-amber-400",
      },
      LUXURY: { label: "Luxo", color: "bg-purple-500/20 text-purple-400" },
    };
    return badges[cat as keyof typeof badges] || badges.All;
  };

  const categoryInfo = getCategoryBadge(category);

  return (
    <article className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border-sm border-border-dark rounded-sm px-6 pt-5 pb-4 flex flex-col min-h-[420px] shadow-xl backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-zinc-100">
              {monthUrl} Expenses
            </h3>
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryInfo.color}`}
            >
              {categoryInfo.label}
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            {expenses.length} {expenses.length === 1 ? "purchase" : "purchases"}
          </p>
        </div>

        <div className="relative group">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              appearance-none
              bg-zinc-800/60
              text-zinc-100
              text-sm
              font-medium
              px-4
              py-2.5
              pr-10
              rounded-md
              border-sm
              border-zinc-700/50
              outline-none
              cursor-pointer
              transition-all
              duration-200
              hover:bg-zinc-800
              hover:border-zinc-600
              focus:ring-1
              focus:ring-zinc-500/40
              focus:border-zinc-600
            "
          >
            <option value="All">All categories</option>
            <option value="ESSENTIAL">Essential</option>
            <option value="NOT_ESSENTIAL">Not essential</option>
            <option value="LUXURY">Luxury</option>
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs transition-transform group-hover:translate-y-[-40%]">
            ▼
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {loading && (
          <div className="flex items-center justify-center h-60">
            <SmoothLoading variant="grow" size="md" color="red" />
          </div>
        )}

        {!loading && expenses.length === 0 && (
          <div className="flex flex-col items-center justify-center h-60 space-y-3">
            <div className="w-16 h-16 rounded-full bg-zinc-800/40 flex items-center justify-center">
              <span className="text-3xl">📭</span>
            </div>
            <p className="text-center text-zinc-400 text-sm">
              No expenses found for this category
            </p>
          </div>
        )}

        {!loading && expenses.length > 0 && (
          <ExpensesByMonth
            expenses={paginatedExpenses}
            total={total}
            onDeleteExpense={() => {
              setLoading(true);
              setDeleteExpense((prev) => !prev);
            }}
          />
        )}
      </div>

      {/* Footer */}
      {!loading && expenses.length > 0 && (
        <div className="mt-6 pt-6 border-t border-sm border-zinc-800/50 space-y-4">
          {/* Total */}
          <div className="flex justify-between items-center px-1">
            <span className="text-sm text-zinc-400 font-medium ml-4">
              Total spent
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-red-400 text-xs">-</span>
              <span className="text-red-500 font-bold text-lg mr-4">
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 items-center pt-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="
                  px-4 py-2 
                  bg-zinc-800/60 
                  hover:bg-zinc-700/60 
                  text-zinc-100 
                  text-sm
                  font-medium
                  rounded-md 
                  border-sm
                  border-zinc-700/50
                  disabled:opacity-40 
                  disabled:cursor-not-allowed
                  transition-all
                  duration-200
                  hover:border-zinc-600
                "
              >
                ← Previous
              </button>

              <div className="px-4 py-2 bg-zinc-800/40 rounded-md border-sm border-zinc-700/30">
                <span className="text-sm text-zinc-300 font-medium">
                  {currentPage}
                </span>
                <span className="text-xs text-zinc-500 mx-1">/</span>
                <span className="text-sm text-zinc-500">{totalPages}</span>
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="
                  px-4 py-2 
                  bg-zinc-800/60 
                  hover:bg-zinc-700/60 
                  text-zinc-100 
                  text-sm
                  font-medium
                  rounded-md 
                  border-sm
                  border-zinc-700/50
                  disabled:opacity-40 
                  disabled:cursor-not-allowed
                  transition-all
                  duration-200
                  hover:border-zinc-600
                "
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
