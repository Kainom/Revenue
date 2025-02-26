"use client";
import { getAllTotalExpensesByYear } from "@/services/expense";
import { ExpenseTotalMonth } from "@/types/Expense";
import { getExpenseMonth } from "@/utils/sequenceTime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, useEffect } from "react";

export const NavLinkExpense = (): ReactElement => {
  const path = usePathname();
  const [months, setMonth] = React.useState<string[]>([]);

  useEffect(() => {
     async function getMonths(): Promise<string[]> {
      const currentYear: number = new Date().getFullYear();
      const expenses: ExpenseTotalMonth[] = await getAllTotalExpensesByYear(
        currentYear
      );
      return getExpenseMonth(expenses);
     }
    getMonths().then((months)=>{return setMonth(months)}).then(()=>{console.log(months)})
  },[])
  return (  
    <React.Fragment>
      {months.map((month) => (
        <li key={month}>
          <Link
            href={`/archive/${month}`}
            className={`
                            ${
                              path.endsWith(month)
                                ? "bg-background-secondary py-3 px-8   rounded-md transition-all"
                                : "hover:text-primary-600"
                            }
                            transition-all duration-300
                            `}
          >
            {month}
          </Link>
        </li>
      ))}
    </React.Fragment>
  );
};
