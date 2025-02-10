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
import TreasurePNG from "@/assets/treasure.png";
import CdbPNG from "@/assets/cdb.png";

export default async function Revenues() {
  const revenues: Revenue[] = await getRevenues();
  const total = revenues
    .map((e) => e.investimento)
    .reduce((total, revenue) => {
      return total + revenue;
    }, 0);

  console.log(revenues);
  return (
    <React.Fragment>
      <main className="">
        <ul className="flex justify-center py-6  mt-5 gap-5 flex-wrap ">
          {revenues.map((revenue) => (
            <li
              className="w-3/12  p-4 rounded-md hover:bg-background-tertiary transition-all duration-300 flex flex-wrap border-sm border-zinc-700 shadow-sm hover:shadow"
              key={revenue.id}
            >
              {/* <div className="cursor-pointer">
                {revenue.nome.includes("CDB") ? (
                  <Image className="mb-2" src={CdbPNG} alt="cdb icon" />
                ) : (
                  <Image
                    className="mb-2"
                    src={TreasurePNG}
                    alt="Treasure icon"
                  />
                )}
              </div> */}
              <Link className=" w-full" href={`/bag/${revenue.slug}`}>
                <div className="">
                  <span className="">
                    <strong className="">
                      <p className=" mb-4 text-xl ">
                        {revenue.nome}
                      </p>
                    </strong>
                  </span>

                  <span className="flex gap-4 text-center items-center text-xl  text-zinc-300">
                    <Image
                      className="bg-accent-green-hover rounded-full p-1"
                      src={Money}
                      alt="money"
                    />
                    <strong>
                      <p>${revenue.investimento}</p>
                    </strong>
                  </span>
                  <span className="flex gap-4 text-center items-center text-base my-4 text-zinc-300">
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
                      className="p-1"
                      src={Timer}
                      alt="money"
                    />
                    <strong className="flex gap-2 text-sm text-zinc-300">
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
              <div className="w-full gap-4 flex justify-end items-center border-t-sm border-zinc-700 mt-4 pt-4">
                <button className="">
                  <Image className="cursor pointer" src={RemoveSVG} alt="remove"></Image>
                </button>
                <button className="" >
                  <Image className="cursor pointer" src={EditSVG} alt="edit"></Image>
                </button>
              </div>
             
            </li>
          ))}
        </ul>
        <article className="  mt-10 flex  w-full justify-center items-center absolute bottom-0  pb-4  ">
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
