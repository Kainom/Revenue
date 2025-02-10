import { Expense } from "@/types/Expense";
import React, { ReactElement } from "react";
import ArrowUp from "@/assets/arrowUp.svg";
import Image from "next/image";
import Calendar from "@/assets/calendar.svg";
export interface Parm {
  expense: Expense[];
  filter: string;
}
export const Month = ({ expense, filter = "janeiro" }: Parm): ReactElement => {
  const total = expense.reduce((sum, expense) => {
    return sum + expense.valor;
  }, 0);

  const mes: string = filter.charAt(0).toUpperCase() + filter.slice(1);
  return (
    <React.Fragment>
      <article className=" mt-7  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-8  justify-between w-10/12  mx-auto">
        <div className="border-sm pb-5 border-border-dark px-5 flex flex-col  rounded-sm">
          <strong>
            <span className="flex items-center justify-between  bg-slate-00 pt-4">
              <p className="text-xs mb-1.5">Monthly Total</p>
              <Image className="mb-2" src={Calendar} alt="arrow up"></Image>
            </span>
            <p className="text-2xl">{total}</p>
          </strong>
          <p className="text-[0.65rem] text-zinc-400">
            Total expenses for March
          </p>
        </div>
        <div className="border-sm pb-5 border-border-dark px-5  flex flex-col  rounded-sm">
          <strong>
            <span className="flex items-center justify-between  bg-slate-00 pt-4">
              <p className="text-xs mb-1.5 ">#1 Expensive Month</p>
              <Image className="mb-2" src={ArrowUp} alt="arrow up"></Image>
            </span>
            <p className="text-2xl">$445.75</p>
          </strong>
          <p className="text-[0.65rem] text-zinc-400 ">August</p>
        </div>
        <div className="border-sm pb-5 border-border-dark px-5 flex flex-col  rounded-sm">
          <strong>
            <span className="flex items-center justify-between  bg-slate-00 pt-4">
              <p className="text-xs mb-1.5">#2 Expensive Month</p>
              <Image className="mb-2" src={ArrowUp} alt="arrow up"></Image>
            </span>
            <p className="text-2xl">$420.50</p>
          </strong>
          <p className="text-[0.65rem] text-zinc-400">April</p>
        </div>
        <div className="border-sm pb-5 border-border-dark px-5 flex flex-col  rounded-sm">
          <strong>
            <span className="flex items-center justify-between  bg-slate-00 pt-4">
              <p className="text-xs mb-1.5">#3 Expensive Month</p>
              <Image className="mb-2" src={ArrowUp} alt="arrow up"></Image>
            </span>
            <p className="text-2xl">$390.25</p>
          </strong>
          <p className="text-[0.65rem] text-zinc-400">October</p>
        </div>
      </article>
    </React.Fragment>
  );
};
