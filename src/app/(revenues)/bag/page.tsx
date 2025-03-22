import React from "react";
// import revenues from "../../../revenues";
import { Revenue } from "@/types/Revenue";
import { getRevenues } from "@/services/api";
import { GridRevenues } from "@/components/revenue/Grid";

export default async function Revenues() {
  const revenues: Revenue[] = await getRevenues();
 
  const total = revenues
    .map((e) => e.investimento)
    .reduce((total, revenue) => {
      return total + revenue;
    }, 0);

  return (
    <React.Fragment>
      <main className="h-screen">
        <GridRevenues revenues={revenues} />
        <article className="  mt-10 flex  w-full justify-center items-center relative -bottom-1/2 pb-4  ">
          <div className="py-4  w-8/12 rounded-lg pr-4 flex items-center justify-between border-sm border-zinc-700">
            <h1 className="text-xl px-4 text-center">Total Investido </h1>
            <strong className="text-xl text-accent-green-hover">
              <p>R${total.toFixed(2)}</p>
            </strong>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

