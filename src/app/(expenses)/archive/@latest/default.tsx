import BarCharMonth from "@/components/expense/BarMonth";
import { CardMonth } from "@/components/expense/CardMonth";
import { CategoryExpense } from "@/components/expense/Category";
import React, { ReactElement } from "react";

export default function LatestRevenue(): ReactElement {
  return (
    <React.Fragment>
      <main className="mt-7">
        <section className="w-10/12 min-[835px]:mx-auto  max-[835px]:w-full  max-[835px]:p-2  ">
          <section className="grid grid-cols-[1fr,0.7fr] max-[598px]:grid-cols-1  gap-5  pb-4">
            <article className="border-sm border-border-dark p-8 rounded-sm">
              <BarCharMonth/>
            </article>
            <CategoryExpense/>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
