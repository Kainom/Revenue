import Link from "next/link";
import React from "react";
// import revenues from "../../../revenues";
import Money from "@/assets/dollar-sign.svg";
import Timer from "@/assets/timerSchedule.svg";
import RevenueSVG from "@/assets/revenue.svg";
import RemoveSVG from "@/assets/remove.svg";
import EditSVG from "@/assets/edit-line.svg";
import Image from "next/image";
import { Revenue } from "@/types/Revenue";
import { getRevenues } from "@/services/api";

export default async function Revenues() {
  const revenues = await getRevenues();
  const total = revenues
    .map((e) => e.investimento)
    .reduce((total, revenue) => {
      return total + revenue;
    }, 0);

  console.log(revenues);
  return (
    <React.Fragment>
      <main className="">
        <div className="mb-20 mt-4">
          <h1 className="text-primary-600 text-4xl px-4 ">Revenues</h1>
        </div>
        <ul className="flex justify-center py-6  gap-5 flex-wrap ">
          {revenues.map((revenue) => (
            <li
              className="bg-background-secondary  w-3/12  p-4 rounded-md hover:bg-background-tertiary transition-all duration-300 flex flex-wrap"
              key={revenue.id}
            >
              <Link href={`/bag/${revenue.slug}`}>
                <div className="">
                  <span className="bg-red-200  ">
                    <strong className="">
                      <p className="text-primary-600 mb-4 text-xl">
                        {revenue.nome}
                      </p>
                    </strong>
                  </span>

                  <span className="flex gap-4 text-center items-center text-2xl">
                    <Image
                      className="bg-accent-green-hover rounded-full p-1"
                      src={Money}
                      alt="money"
                    />
                    <strong>
                      <p>${revenue.investimento}</p>
                    </strong>
                  </span>
                  <span className="flex gap-4 text-center items-center text-2xl my-4">
                    <Image
                      className="bg-accent-green-hover rounded-full p-1"
                      src={RevenueSVG}
                      alt="money"
                    />
                    <strong>
                      <p>
                        {revenue.indexado ? revenue.indexado + " + " : ""}
                        {revenue.rendimento}%
                      </p>
                    </strong>
                  </span>
                  <span className="flex gap-4 text-center items-center  mt-2">
                    <Image
                      className="bg-primary-200 rounded-full p-1"
                      src={Timer}
                      alt="money"
                    />
                    <strong className="flex gap-2 text-sm">
                      <p>
                        {revenue.vencimento.toLocaleString("default", {
                          month: "long",
                        })}
                      </p>
                      <p>{revenue.vencimento.getDate()},</p>
                      <p>{revenue.vencimento.getFullYear()}</p>
                    </strong>
                  </span>
                </div>
              </Link>
              <button className="w-full gap-2 flex justify-end items-center">
                <Image className="" src={RemoveSVG} alt="remove"></Image>
                <Image className="" src={EditSVG} alt="edit"></Image>
              </button>
            </li>
          ))}
        </ul>
        <article className="bg-background-secondary  mt-20 flex  w-full justify-end items-center relative bottom-0  ">
          <div className="py-4  pr-4 flex items-center">
            <h1 className="text-2xl px-4 text-center">
              Total Investido:{" "}
              <strong className="text-xl text-accent-green-hover">
                R${total.toFixed(2)}
              </strong>
            </h1>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}
