import React from "react";
import { TotalExpenseMonth } from "@/components/expense/TotalExpenseMonth";
import { ThreeExpensiveMonth } from "@/components/expense/ThreeExpensiveMonth";

type Month = {
  params: Promise<{ filter: string }>;
};

export default async function MonthExpense({ params }: Month) {
  let { filter } = await params;

  const current: string = new Date().toLocaleString("en", {
    month: "long",
  });

  if (!filter) {
    filter = current;
  }

  return (
    <React.Fragment>
      <main className="">
        <article className=" mt-7  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-8  justify-between w-10/12  mx-auto">
          <TotalExpenseMonth filter={filter} />
          <ThreeExpensiveMonth />
        </article>
      </main>
    </React.Fragment>
  );
}
