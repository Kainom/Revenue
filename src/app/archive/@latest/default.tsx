import { CardMonth } from "@/components/CardMonth";
import React, { ReactElement } from "react";

export default function LatestRevenue(): ReactElement {
  return (
    <React.Fragment>
      <main className="">
        <div className="w-10/12 min-[835px]:mx-auto  max-[835px]:w-full   ">
          <h1 className="max-[835px]:mx-3 text-3xl my-5">Highest Expense Months</h1>
          <div className="flex  gap-4 p-2 justify-center  max-[835px]:grid max-[835px]:col-span-full ">
            <CardMonth />
            <CardMonth />
            <CardMonth />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
