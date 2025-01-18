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
    <React.Fragment>
      {months.map((month) => (
        <li>
          <Link
            key={month}
            href={`/archive/${month}`}
            className={`
                            ${
                              path.endsWith(month)
                                ? "text-primary-600"
                                : "hover:text-primary-600"
                            }
                            transition-all duration-300
                            `}
          >
            {month.toUpperCase()}
          </Link>
        </li>
      ))}
    </React.Fragment>
  );
};
