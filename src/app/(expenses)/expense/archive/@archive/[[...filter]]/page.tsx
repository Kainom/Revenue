import React from "react";
import { TotalExpenseMonth } from "@/components/expense/TotalExpenseMonth";
import { ThreeExpensiveMonth } from "@/components/expense/ThreeExpensiveMonth";
import { getPossibleMonths } from "@/utils/GetPossibleMonths";
import { getMonthNumber } from "@/utils/MapMonth";
import { Month } from "@/types/Month";
import { notFound } from "next/navigation";

type MonthParm = {
  params: Promise<{ filter: string }>;
};

export default async function MonthExpense({ params }: MonthParm) {
  let { filter } = await params;

  const current: string = new Date().toLocaleString("en", {
    month: "long",
  });

  if (!filter) {
    filter = current;
  } else {
    const month: Month = {
      name: filter.toString(),
      number: getMonthNumber(filter),
    };
    if (!getPossibleMonths(new Date().getMonth() + 1).some((monthCheck) => monthCheck.number === month.number)) {
      notFound();
    }
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
