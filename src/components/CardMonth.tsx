import React, { ReactElement } from "react";

export const CardMonth = (): ReactElement => {
  return (
    <React.Fragment>
      <article className="border-l-4 border-primary-600 w-2/4 p-2 bg-background-secondary rounded-sm mb-10 shadow-[0_35px_60px_-15px_rgba(20,20,20,0.6)]">
        <div className="flex gap-4 justify-between px-4 py-2 text-xl">
          <h2>Janeiro</h2>
          <p className="text-accent-green-hover">R$ 2900,00</p>
        </div>
        <div className="grid  p-1.5   w-11/12 px-3 mx-4 gap-2 ">
          <span className="flex justify-between items-center bg-background-primary  rounded-sm p-1.5  px-2">
            <p className="text-sm">Office rent</p>
            <p>$520,00</p>
          </span>
          <span className="flex justify-between items-center bg-background-primary rounded-sm p-1.5  px-2 ">
            <p className="text-sm">Office rent</p>
            <p>$520,00</p>
          </span>
          <span className="flex justify-between items-center bg-background-primary rounded-sm p-1.5  px-2 ">
            <p className="text-sm">Office rent</p>
            <p>$520,00</p>
          </span>
          <span className="flex justify-between items-center bg-background-primary rounded-sm p-1.5  px-2 ">
            <p className="text-sm">Office rent</p>
            <p>$520,00</p>
          </span>
          <span className="flex justify-between items-center bg-background-primary rounded-sm p-1.5  px-2 ">
            <p className="text-sm">Office rent</p>
            <p>$520,00</p>
          </span>
        </div>
      </article>
    </React.Fragment>
  );
};
