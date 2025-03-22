import { Revenue } from "@/types/Revenue";
import { BadgePercent, DollarSign } from "lucide-react";
import Link from "next/link";
import { Timer } from "lucide-react";
import { ButtonsToBag } from "./ButtonsToBag";






export const GridRevenues = ({revenues}:{revenues:Revenue[]}) =>{
    return (
      <>
        <ul className="flex justify-center py-6   gap-5 flex-wrap ">
          {revenues.map((revenue) => (
            <li
              className="w-3/12  p-4 rounded-md hover:bg-background-tertiary transition-all duration-300 flex flex-wrap border-sm border-zinc-700 shadow-sm hover:shadow"
              key={revenue.id}
            >
              <Link className=" w-full" href={`/bag/${revenue.slug}`}>
                <div className="">
                  <span className="">
                    <strong className="">
                      <p className=" mb-4 text-xl ">{revenue.nome}</p>
                    </strong>
                  </span>

                  <span className="flex gap-4 text-center items-center text-xl  text-zinc-300">
                    <span className="bg-accent-green-hover rounded-full p-1">
                      <DollarSign width={18} />
                    </span>
                    <strong>
                      <p>${revenue.investimento}</p>
                    </strong>
                  </span>
                  <span className="flex gap-4 text-center items-center text-base my-4 text-zinc-300">
                    <span className="p-1">
                      <BadgePercent width={18} />
                    </span>
                    <strong>
                      <p>
                        {revenue.indexado ? revenue.indexado + " + " : ""}
                        {revenue.rendimento}%
                      </p>
                    </strong>
                  </span>
                  <span className="flex gap-4 text-center items-center  mt-2">
                    <span className="p-1">
                      <Timer width={18} />
                    </span>
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

              <ButtonsToBag id={revenue.id} />
            </li>
          ))}
        </ul>
      
      </>
    );
}