import React, { ReactElement } from "react";
import { NavLinkExpense } from "./NavLinkExpense";
import Link from "next/link";
import { getTotalAmountInYear } from "@/services/expense";
import { Plus, TrendingUp, Calendar } from "lucide-react";
import { ImportExpenseButton } from "./ImportExpenseButton";

export const MonthExpenseNav = async (): Promise<ReactElement> => {
  const total = await getTotalAmountInYear();

  return (
    <React.Fragment>
      <nav className="w-10/12 mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-6 mb-6 mt-6">
          <div className="space-y-3">
            {/* Title with Badge */}
            <div className="flex items-center gap-2.5">
              <h2 className="text-4xl font-bold text-white mb-2">
                Expenses {new Date().getFullYear()}
              </h2>
              <div className="px-2.5 py-0.5 bg-zinc-800/50 rounded-full border-sm border-zinc-700/50 mb-2">
                <span className="text-[0.65rem] text-zinc-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Annual
                </span>
              </div>
            </div>

            {/* Total Amount Card */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-red-600/5 border-sm border-red-500/20 rounded-md px-4 py-2.5 shadow-lg shadow-red-500/5 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-md bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-[0.65rem] text-zinc-400 font-medium mb-0.5">
                  Total amount in year
                </p>
                <p className="text-xl font-bold text-red-500">
                  R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Import Button */}
            <ImportExpenseButton />

            {/* Add Button */}
            <Link
              href={"/expense/new-expense"}
              className="
                group
                relative
                flex items-center justify-center gap-2
                bg-gradient-to-r from-red-500 to-red-600
                hover:from-red-600 hover:to-red-700
                text-white
                font-semibold
                px-5 py-2.5
                text-sm
                rounded-md
                border-sm border-red-400/20
                shadow-lg shadow-red-500/25
                hover:shadow-xl hover:shadow-red-500/40
                transition-all
                duration-300
                hover:-translate-y-0.5
                active:scale-95
                overflow-hidden
              "
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="relative flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-90 duration-300">
                  <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span>Add Expense</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border-sm border-border-dark rounded-sm p-5 shadow-xl">
          <ul className="flex flex-wrap gap-2.5">
            <NavLinkExpense />
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};