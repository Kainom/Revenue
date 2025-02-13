import { getRevenue } from "@/services/api";
import { Revenue } from "@/types/Revenue";
import { notFound } from "next/navigation";
import TreasurePNG from "@/assets/treasure.png";
import CdbPNG from "@/assets/cdb.png";
import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dollar } from "@/components/custom/svg/Dollar";
import { Tag } from "@/components/custom/svg/Tag";
import { Calendar } from "@/components/custom/svg/Calendar";
import { Percentage } from "@/components/custom/svg/Percentage";
import { Work } from "@/components/custom/svg/Work";
import { Clock } from "@/components/custom/svg/Clock";
import { Information } from "@/components/custom/svg/Information";
type Slug = {
  params: Promise<{ revenueId: string }>;
};

export default async function RevenuePage({
  params,
}: Slug): Promise<ReactElement> {
  // const { revenueId } = await params;

  // const revenue: Revenue | null  = await getRevenue(revenueId);

  // if (!revenue) notFound();

  const revenue: Revenue = {
    id: "123",
    nome: "Tesouro Selic 2029",
    investimento: 100000,
    rendimento: 314.35,
    dataCriacao: new Date(),
    vencimento: new Date(),
    liquidez: "Diária",
    stats: true,
    instituition: "Rico Plataforma",
    slug: "tesouro-selic-2029",
    carencia: new Date(),
    description: "Investimento para render",
    finalInvestimento: 0,
    indexado: "SELIC",
    tipo: "FIXA",
  };

  return (
    <React.Fragment>
      <main className="  justify-center z-0 mt-10 p-5">
        <h1 className="font-bold text-2xl  mx-auto w-2/3 mb-4">
          Detalhes do Investimentos
        </h1>
        <section className="border-border-dark border-sm  w-2/3 p-6 mx-auto rounded-sm">
          <article className="flex gap-2 items-center mb-10">
            <Tag w="22" h="22" />
            <h2 className="text-xl font-bold">Tesouro Selic 2029</h2>
          </article>
          <article className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-5 gap-4">
            <div className="border-sm border-border-dark rounded-sm  text-[0.955rem] p-6">
              <span className="flex gap-2 items-center">
                <Dollar stroke="#FAFAFA" w="18" h="18" />
                <h3 className="font-bold">Valores</h3>
              </span>
              <div className="mt-5 ">
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">Investimento:</p>
                  <p className="font-bold">R$ 314,35</p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary "> Rendimento:</p>
                  <p className="font-bold">11.11% </p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">
                    Valor Final Bruto:
                  </p>
                  <p className="font-bold">R$ 533,19</p>
                </span>
              </div>
            </div>
            <div className="border-sm border-border-dark rounded-sm  p-6">
              <span className="flex gap-2 items-center">
                <Calendar w="18" h="18" />
                <h3 className="font-bold">Datas</h3>
              </span>
              <div className="mt-5 text-[0.955rem]">
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">Data de Criação:</p>
                  <p className="font-bold">10/01/2024</p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">Vencimento:</p>
                  <p className="font-bold">28/02/2029 </p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">Carência:</p>
                  <p className="font-bold">31/12/1999</p>
                </span>
              </div>
            </div>
          </article>
          <article className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  items-center  px-2 py-5 mt-5 border-border-dark border-t-sm border-b-sm ">
            <div className="flex gap-2 items-center">
              <Work fill="#7e7e7e" w="22" h="22" />
              <span>
                <p className="text-sm text-foreground-secondary">Instituição</p>
                <h3 className="font-bold">Rico Plataforma</h3>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Clock fill="#7e7e7e" w="22" h="22" />
              <span>
                <p className="text-sm text-foreground-secondary">Liquidez</p>{" "}
                <h3 className="font-bold">Diária</h3>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Percentage fill="#7e7e7e" w="22" h="22" />
              <span>
                <p className="text-sm text-foreground-secondary">Indexador</p>{" "}
                <h3 className="font-bold">SELIC</h3>
              </span>
            </div>
          </article>
          <article className="mt-5 ">
            <div>
              <span className="flex gap-2 mb-2 items-center ">
                <Information  w="20" h="20" />
                <h3 className="font-bold">Descrição</h3>
              </span>
              <p className="text-foreground-secondary text-sm">
                Investimento para render
              </p>
            </div>
            <div className="py-2 mt-10 flex gap-2">
              <Link
                className="px-5 py-1.5 text-sm bg-zinc-50 text-background-primary rounded-sm hover:bg-zinc-300 transition-all duration-300"
                href={"/edit"}
              >
                Edit
              </Link>
              <Link
                className="px-5 py-1.5 text-sm  border-sm border-border-dark rounded-sm hover:bg-background-secondary transition-all duration-300"
                href={"/bag"}
              >
                Bag
              </Link>
            </div>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
{
  /* <div className="flex justify-center items-center">
            <Link
              className="cursor-pointer"  
              href={`/bag/${revenue.slug}/desc`}
            >
              {revenue.nome.includes("CDB") ? (
                <Image className="mb-2" src={CdbPNG} alt="cdb icon" />
              ) : (
                <Image className="mb-2" src={TreasurePNG} alt="Treasure icon" />
              )}
            </Link>
          </div> */
}

{
  /* <p>Vencimento: {revenue.vencimento.toLocaleDateString()}</p> */
}
