import Link from "next/link";
import React from "react";
import revenues from "../../../revenues";
import Money from "../../assets/dollar-sign.svg";
import Timer from "../../assets/timerSchedule.svg";
import Image from "next/image";
export default function Revenues() {
  return (
    <React.Fragment>
      <main className="">
        <div className="my-4">
          <h1 className="text-primary-600 text-4xl px-4 pt-4">Revenues</h1>
          <p className="text-foreground-secondary px-5">All revenues.Click to more informations</p>
        </div>
        <ul className="flex justify-center py-6  gap-5 flex-wrap ">
          {revenues.map((revenue) => (
            <li className="bg-background-secondary  w-3/12  p-4 rounded-md hover:bg-background-primary transition-all duration-300 flex flex-wrap"
            key={revenue.id}
            >

              <Link href={`/bag/${revenue.slug}`}>
                <div className="px-4">
                  <strong>
                    <p className="mb-4 text-xl">{revenue.nome}</p>
                  </strong>
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
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}
{
  /* <li className="bg-background-secondary w-4/12 p-4 rounded-md hover:bg-background-primary">
          <Link href={`/bag/${revenues[0].slug}`}>
          <div className="px-4">
              <strong>
                <p className="mb-4 text-2xl">{revenues[0].nome}</p>
              </strong>
              <span className="flex gap-4 text-center items-center text-2xl">
                <Image
                  className="bg-accent-green-hover rounded-full p-1"
                  src={Money}
                  alt="money"
                />
                <strong>
                  <p>${revenues[0].investimento}</p>
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
                    {revenues[0].vencimento.toLocaleString("default", {
                      month: "long",
                    })}
                  </p>
                  <p>{revenues[0].vencimento.getDate()},</p>
                  <p>{revenues[0].vencimento.getFullYear()}</p>
                </strong>
              </span>
            </div>
          </Link>
            
          </li> */
}
