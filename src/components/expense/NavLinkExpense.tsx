"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

export const NavLinkExpense = ({
  months,
}: {
  months: string[];
}): ReactElement => {
  const path = usePathname();
  return (
    <React.Fragment
    >
      {months.map((month) => (
        <li 
        key={month}
        >
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
