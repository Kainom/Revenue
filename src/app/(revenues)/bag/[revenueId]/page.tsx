import { getRevenue } from "@/services/api";
import { Revenue } from "@/types/Revenue";
import { notFound } from "next/navigation";
import TreasurePNG from "@/assets/treasure.png";
import CdbPNG from "@/assets/cdb.png";
import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <main className="flex  justify-center z-0 mt-16 p-5">
        <section className="bg-background-secondary grap grid-cols-1 gap-10 w-5/12 p-5 rounded-md">
          {revenue.nome.includes("CDB") ? (
            <Image className="mb-2" src={CdbPNG} alt="cdb icon" />
          ) : (
            <Image className="mb-2" src={TreasurePNG} alt="Treasure icon" />
          )}
          <strong>
            <h1 className="text-3xl text-primary-600 my-3">{revenue.nome}</h1>
          </strong>

          <article>
            <div className="flex justify-between p-2 text-xl">
              <p>Instituição </p>
              <p>{revenue.instituition}</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Tipo </p>
              <p>{revenue.tipo}</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Data de Criação </p>
              <p>{revenue.dataCriacao.toLocaleDateString()}</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Carencia </p>
              <p>{revenue.carencia.toLocaleDateString()}</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Final Investimento </p>
              <p>{revenue.finalInvestimento}</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Indexador </p>
              <p>{revenue.indexado}</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Rendimento </p>
              <p>{revenue.rendimento}%</p>
            </div>
            <div className="flex justify-between p-2 text-xl items-center">
              <p>Investimento </p>
              <p>{revenue.investimento}</p>
            </div>
          </article>
          <article className="grid grid-cols-1 mt-10 bg-background-tertiary px-4 py-2 rounded-md">
            <p className="text-primary-600 text-2xl mb-2">Descrição </p>
            <p>
              {revenue.description} Somethings can be amazing sometimes,so enjoy
              everything that you can
            </p>
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
