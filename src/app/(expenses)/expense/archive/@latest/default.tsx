import BarCharMonth from "@/components/expense/BarMonth";
import { CategoryExpense } from "@/components/expense/Category";
import React, { ReactElement } from "react";

export default function LatestRevenue(): ReactElement {
  return (
    <React.Fragment>
      <main className="mt-7">
        <section className="w-10/12 min-[835px]:mx-auto max-[835px]:w-full max-[835px]:p-2">
          <section className="grid grid-cols-[1fr,0.7fr] max-[598px]:grid-cols-1 gap-5 pb-4">
            <article className="border-sm border-border-dark px-8 pb-8 rounded-sm">
              <header>
                <p className="mt-4 mb-3 text-sm font-semibold text-zinc-100">
                  Yearly Overview
                </p>
                <p className="mb-6 text-xs text-zinc-400 leading-normal">
                  Monthly expense breakdown
                </p>
              </header>

              <BarCharMonth />
            </article>

            <CategoryExpense />
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
