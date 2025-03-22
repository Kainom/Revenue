import React, { ReactElement } from "react";
import Calendar from "@/assets/calendar.svg";
import Tag from "@/assets/tag.svg";
import Image from "next/image";
import Perecentage from "@/assets/percentage.svg";
import { getExpense } from "@/services/expense";
import { Expense } from "@/types/Expense";
import { getMonth } from "date-fns";
import { getNamedMonthOfDate } from "@/utils/sequenceTime";

type SlugExpense = {
  params: Promise<{ expenseSlug: string }>;
};
export default async function SpecificExpense({
  params,
}: SlugExpense): Promise<ReactElement> {
  const { expenseSlug } = await params;
  const expense: Expense = await getExpense(expenseSlug);

  const month: string = expense.paymentDay.toLocaleString("en", {
    month: "long",
  });
  const day: number = expense.paymentDay.getDate();
  const year: number = expense.paymentDay.getFullYear();
  const slug: string = expense.slug.split(" ",1).toString();
  return (
    <React.Fragment>
      <main className=" mt-10 flex p-14 justify-center  w-full">
        <section className="w-7/12   rounded-sm relative border-sm border-border-light ">
          <article className="p-2 border-b-sm border-border-light">
            <div className="p-6 flex justify-between ">
              <div className="w-full">
                {expense.parcela && (
                  <h1 className="text-2xl font-bold">
                    {expense.nome}/{expense.parcela.quantidadeDeParcela}
                  </h1>
                )}
                {!expense.parcela && (
                  <h1 className="text-2xl font-bold">{expense.nome}</h1>
                )}
                <div className="flex gap-2 mt-2 justify-between items-center ">
                  <span className="flex items-center">
                    <Image src={Calendar} alt="calendar icon" />
                    <p className="text-sm text-zinc-400">
                      {month} {day}, {year}
                    </p>
                  </span>
                  <span className="flex text-xs text-zinc-50 bg-zinc-800  py-1.5 px-2 rounded-lg hover:bg-zinc-700 transition-all duration-300 items-center gap-1 ">
                    <Image src={Tag} alt="tag icon" />
                    <p>{expense.category}</p>
                  </span>
                </div>
              </div>
              {/* <h1 className="text-2xl font-bold">R${expense.value}</h1> */}
            </div>
          </article>
          <article className="mt-3 p-2">
            <div className="p-6">
              <h3 className="text-zinc-400 ">Details</h3>
              <div className="mt-2 grid  grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
                <span className="">
                  <h4 className="text-zinc-400 ">Slug</h4>
                  <p className="text-zinc-300 text-[0.9rem] mt-2">{slug}</p>
                </span>
                <span>
                  <h4 className="text-zinc-400 ">Date</h4>
                  <p className=" text-zinc-300 text-[0.9rem]  mt-2">
                    {month} {day}, {year}
                  </p>
                </span>
                <span>
                  <h4 className="text-zinc-400 ">Category</h4>
                  <p className=" text-zinc-300 text-[0.9rem]  mt-2">
                    {expense.category}
                  </p>
                </span>
                <span>
                  <h4 className="text-zinc-400 ">Grove</h4>
                  <p className="text-zinc-300 text-[0.9rem] mt-2 overflow-hidden">
                    {expense.grove}
                  </p>
                </span>
              </div>
              <div className="mt-5">
                <h3 className="text-zinc-400 ">Description</h3>
                <p className="text-zinc-300 text-[0.9rem] mt-2 overflow-hidden">
                  {expense.description}
                </p>
              </div>
              <div className="mt-5  border-b-sm border-border-light pb-2.5">
                <h3 className="text-zinc-400 mb-2">Amount Breakdown</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] items-center gap-4 mt-2">
                  {expense.parcela && (
                    <span className="flex justify-between items-center py-1 ">
                      <h4 className="text-zinc-400 ">Subtotal</h4>
                      <p className="text-zinc-300 ">{expense.value}</p>
                    </span>
                  )}
                  {expense.parcela && (
                    <span className="flex justify-between items-center p-1">
                      <h4 className="text-zinc-400 ">Parcela</h4>
                      <p className="text-zinc-300 ">{expense.parcela.quantidadeDeParcela}x{ expense.value}</p>
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <p>Total</p>
                <p className="text-red-600">
                  R$
                  {expense.parcela
                    ? expense.parcela.totalCompra
                    : expense.value}
                </p>
              </div>
            </div>
          </article>
          <article className="px-8 pb-6">
            <div className="flex justify-between bg-background-secondary p-4 rounded-sm content-center">
              <div className="">
                <span className="flex gap-5">
                  <Image src={Perecentage} alt="percentage" />
                  <span>
                    <h3>Percentage</h3>
                    <p className="text-zinc-500 text-sm">Of saluary</p>
                  </span>
                </span>
              </div>
              <span className="flex text-xs text-zinc-50 bg-zinc-800 px-6  rounded-lg hover:bg-zinc-700 transition-all duration-300 items-center  mt-2">
                <p>0.56%</p>
              </span>
            </div>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
