import { CardMonth } from "@/components/CardMonth";
import React, { ReactElement } from "react";

export default function LatestRevenue(): ReactElement {
  return (
    <React.Fragment>
      <main className="w-10/12 mx-auto">
        <h1 className="text-3xl my-5">Highest Expense Months</h1>
        <div className="flex  gap-4 p-2 justify-center ">
          <CardMonth />
          <CardMonth />
          <CardMonth />
        </div>
      </main>
    </React.Fragment>
  );
}
