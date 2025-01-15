import Link from "next/link";
import React, { ReactElement } from "react";

export const MonthExpenseNav = ({ months }: { months: string[] }): ReactElement => {
    console.log(months);
    return (
        <React.Fragment>
            <nav className="w-10/12 mx-auto mt-5 ">
                <h2 className="text-4xl mb-6 pt-4">Expenses {new Date().getFullYear()}</h2>
                <ul className="flex flex-wrap bg-background-secondary gap-4 p-4 rounded-sm">
                    {months.map(month => (
                        <Link
                        key={month}
                        href={`/archive/${month}`}
                        className="hover:text-primary-600 transition-all duration-300"
                        >
                            {month.toUpperCase()}
                        </Link>
                    ))}

                </ul>
            </nav>
        </React.Fragment>
    )
};
