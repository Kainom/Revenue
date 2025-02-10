import React, { ReactElement } from "react";
import { NavLinkExpense } from "./NavLinkExpense";
import Link from "next/link";
export const MonthExpenseNav = ({
  months,
}: {
  months: string[];
}): ReactElement => {
  return (
    <React.Fragment>
      <nav className="w-10/12 mx-auto  ">
        <div className="flex items-center   mb-6 p-2  justify-between mt-4">
          <h2 className="text-4xl">Expenses {new Date().getFullYear()}</h2>
          <Link
            className="text-background-primary bg-zinc-50 px-6 py-2 text-sm rounded-sm hover:bg-zinc-200 transition-all duration-300"
            href={"/newExpense"}
          >
            Add New Expense
          </Link>
        </div>
        <ul className="flex flex-wrap  gap-8 p-6 rounded-sm border-sm border-border-dark">
          <NavLinkExpense months={months} />
        </ul>
      </nav>
    </React.Fragment>
  );
};
