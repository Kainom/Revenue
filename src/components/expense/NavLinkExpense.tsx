"use client";
import { Month } from "@/types/Month";
import {
  getPossibleMonths,
} from "@/utils/GetPossibleMonths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, useEffect} from "react";

const currentMonth: number = new Date().getMonth() + 1;

export const NavLinkExpense = (): ReactElement => {
  const path = usePathname();
  const [months, setMonths] = React.useState<Month[]>([]);

 
  useEffect(() => {
    const possibleMonths: Month[] = getPossibleMonths(currentMonth);
    setMonths(possibleMonths);
},[])

  return (
    <React.Fragment>
      {months.map((month) => (
        <li key={month.number}>
          <Link
            href={`/archive/${month.name}`}
            className={`
                            ${
                              path.endsWith(month.name)
                                ? "bg-background-secondary py-3 px-8   rounded-md transition-all"
                                : "hover:text-primary-600"
                            }
                            transition-all duration-300
                            `}
          >
            {month.name}
          </Link>
        </li>
      ))}
    </React.Fragment>
  );
};
