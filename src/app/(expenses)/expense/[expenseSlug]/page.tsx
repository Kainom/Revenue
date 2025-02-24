import React, { ReactElement } from "react";
import Calendar from "@/assets/calendar.svg";
import Tag from "@/assets/tag.svg";
import Image from "next/image";
import Perecentage from "@/assets/percentage.svg";

export default function SpecificExpense(): ReactElement {
  return (
    <React.Fragment>
      <main className=" mt-10 flex p-14 justify-center">
        <section className="w-7/12   rounded-sm relative border-sm border-border-light ">
          <article className="p-2 border-b-sm border-border-light">
            <div className="p-6 flex justify-between ">
              <div>
                <h1 className="text-2xl font-bold">Office Supplies</h1>
                <span className="flex gap-2 mt-2">
                  <Image src={Calendar} alt="calendar icon" />
                  <p className="text-sm text-zinc-400">February 11, 2025</p>
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">$149.99</h1>
                <span className="flex text-xs text-zinc-50 bg-zinc-800 px-2.5 py-[0.190rem] rounded-lg hover:bg-zinc-700 transition-all duration-300 items-center gap-1 mt-2">
                  <Image src={Tag} alt="tag icon" />
                  <p>Essencial</p>
                </span>
              </div>
            </div>
          </article>
          <article className="mt-3 p-2">
            <div className="p-6">
              <h3 className="text-zinc-400 ">Details</h3>
              <div className="mt-2 grid  grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
                <span className="">
                  <h4 className="text-zinc-400 ">ID</h4>
                  <p className="text-zinc-300 text-[0.9rem] mt-2">exp_123</p>
                </span>
                <span>
                  <h4 className="text-zinc-400 ">Date</h4>
                  <p className=" text-zinc-300 text-[0.9rem]  mt-2">
                    Feb 11, 2025
                  </p>
                </span>
                <span>
                  <h4 className="text-zinc-400 ">Category</h4>
                  <p className=" text-zinc-300 text-[0.9rem]  mt-2">
                    Essencial
                  </p>
                </span>
                <span>
                  <h4 className="text-zinc-400 ">Grove</h4>
                  <p className="text-zinc-300 text-[0.9rem] mt-2 overflow-hidden">
                    WEST Mechanics
                  </p>
                </span>
              </div>
              <div className="mt-5">
                <h3 className="text-zinc-400 ">Description</h3>
                <p className="text-zinc-300 text-[0.9rem] mt-2 overflow-hidden">
                  Purchased new notebooks, pens, and other office supplies for
                  the team meeting. Including special markers for the whiteboard
                  session and sticky notes for the sprint planning.
                </p>
              </div>
              <div className="mt-5  border-b-sm border-border-light pb-2.5">
                <h3 className="text-zinc-400 mb-2">Amount Breakdown</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] items-center gap-4 mt-2">
                  <span className="flex justify-between items-center py-1 ">
                    <h4 className="text-zinc-400 ">Subtotal</h4>
                    <p className="text-zinc-300 ">$59.99</p>
                  </span>
                  <span className="flex justify-between items-center p-1">
                    <h4 className="text-zinc-400 ">Parc</h4>
                    <p className="text-zinc-300 ">2x59</p>
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <p>Total</p>
                <p>R$120.00</p>
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
