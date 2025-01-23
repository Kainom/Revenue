import React, { ReactElement } from "react";
import { NavLinkExpense } from "./NavLinkExpense";
export const MonthExpenseNav = ({
  months,
}: {
  months: string[];
}): ReactElement => {
  return (
    <React.Fragment>
      <nav className="w-10/12 mx-auto  ">
        <h2 className="text-4xl mb-6 pt-2 ml-3">
          Expenses {new Date().getFullYear()}
         
        </h2>
        <ul className="flex flex-wrap  gap-4 p-4 rounded-sm">
          <NavLinkExpense months={months} />
        </ul>
      </nav>
    </React.Fragment>
  );
};
