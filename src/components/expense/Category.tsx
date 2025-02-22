"use client";
import React, { ReactElement, useState } from "react";

export const CategoryExpense = (): ReactElement => {
  const [category, setCategory] = useState<string>();
  return (
    <React.Fragment>
      <article className="border-sm border-border-dark py-4 px-6 rounded-sm">
        <div className="flex justify-between mb-4">
          <div className="flex justify-between">
            <span>
              <strong>
                <p>March Expenses</p>
              </strong>
              <p className="text-xs text-zinc-400">Individual purchases</p>
            </span>
          </div>
          <div>
            <select
              className="mb-4 text-[0.70rem] py-2 w-24 bg-background-primary text-white border-2 border-border-dark border-double rounded-md outline-none focus:ring-2 focus:ring-zinc-500 "
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value as
                    | "All"
                    | "Essencial"
                    | "Not Essencial"
                    | "Luxury"
                )
              }
            >
              <option className="pt-20" value="All">
                All
              </option>
              <option value="Essencial">Essencial</option>
              <option value="Not Essencial">Not Essencial</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>
        <div className="border-b-sm border-border-light py-2 ">
          <span className="flex justify-between">
            <p className="text-sm">Electricity Bill</p>
            <p className="text-sm text-red-600"> -$180.00</p>
          </span>
          <span className="flex gap-4 items-center mt-2">
            <p className="text-xs text-zinc-400 ">Mar 1</p>
            <p className="text-xs text-zinc-50 bg-zinc-800 px-3 py-0.5 rounded-lg hover:bg-zinc-700 transition-all duration-300">
              Utilities
            </p>
          </span>
        </div>
        <div className="border-b-sm border-border-light py-2 ">
          <span className="flex justify-between">
            <p className="text-sm">Gym Membership</p>
            <p className="text-sm text-red-600"> -$50.00</p>
          </span>
          <span className="flex gap-4 items-center mt-2">
            <p className="text-xs text-zinc-400 ">Mar 5</p>
            <p className="text-xs text-zinc-50 bg-zinc-800 px-3 py-0.5 rounded-lg hover:bg-zinc-700 transition-all duration-300">
              Health
            </p>
          </span>
        </div>
        <div className="border-b-sm border-border-light py-2 ">
          <span className="flex justify-between">
            <p className="text-sm">Books</p>
            <p className="text-sm text-red-600"> -$75.00</p>
          </span>
          <span className="flex gap-4 items-center mt-2">
            <p className="text-xs text-zinc-400 ">Mar 10</p>
            <p className="text-xs text-zinc-50 bg-zinc-800 px-3 py-0.5 rounded-lg hover:bg-zinc-700 transition-all duration-300">
              Education
            </p>
          </span>
        </div>
      </article>
    </React.Fragment>
  );
};
