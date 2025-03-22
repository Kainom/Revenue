import { getRevenue } from "@/services/api";
import { Revenue } from "@/types/Revenue";
import React, { ReactElement } from "react";
import Link from "next/link";
import { Dollar } from "@/components/custom/svg/Dollar";
import { Tag } from "@/components/custom/svg/Tag";
import { Calendar } from "@/components/custom/svg/Calendar";
import { Percentage } from "@/components/custom/svg/Percentage";
import { Work } from "@/components/custom/svg/Work";
import { Clock } from "@/components/custom/svg/Clock";
import { Information } from "@/components/custom/svg/Information";
import { notFound } from "next/navigation";
type Slug = {
  params: Promise<{ revenueSlug: string }>;
};

export default async function RevenuePage({
  params,
}: Slug): Promise<ReactElement> {
  const zero = (day: number): string => {
    return `${day > 10 ? day : "0" + day}`;
  };

  const { revenueSlug } = await params;
  const slug = revenueSlug.replace("%20", " ");
  console.log(slug);
  const revenue: Revenue | null = await getRevenue(slug);
  if (!revenue) notFound();


  const dayCreation:number = revenue.dataCriacao.getDate();
  const dayMaturity:number = revenue.vencimento.getDate();
  const dayCarency: number = revenue.carencia.getDate();

    const monthCreation: number = revenue.dataCriacao.getMonth() + 1;
    const monthMaturity: number = revenue.vencimento.getMonth() + 1;
    const monthCarency: number = revenue.carencia.getMonth() + 1;

  const dateCreation = `${zero(dayCreation)}/${
    zero(monthCreation)
  }/${revenue.dataCriacao.getFullYear()}`;
  const dateMaturity = `${zero(dayMaturity)}/${
 zero(monthMaturity)
  }/${revenue.vencimento.getFullYear()}`;
  const dateCarency = `${zero(dayCarency)}/${zero(monthCarency)
  }/${revenue.carencia.getFullYear()}`;

  return (
    <React.Fragment>
      <main className="justify-center z-0 p-5">
        <h1 className="font-bold text-2xl mt-10 mx-auto w-2/3 mb-4">
          Detalhes do Investimentos
        </h1>
        <section className="border-border-dark border-sm  w-2/3 p-6 mx-auto rounded-sm mb-10">
          <article className="flex gap-2 items-center mb-10">
            <Tag w="22" h="22" />
            <h2 className="text-xl font-bold">{revenue.nome}</h2>
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
                  <p className="font-bold">R$ {revenue.investimento}</p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary "> Rendimento:</p>
                  <p className="font-bold">{revenue.rendimento}% </p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">
                    Valor Final Bruto:
                  </p>
                  <p className="font-bold">
                    {revenue.finalInvestimento === 0
                      ? "Não Informado"
                      : "R$" + revenue.finalInvestimento}
                  </p>
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
                  <p className="font-bold">{dateCreation}</p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">Vencimento:</p>
                  <p className="font-bold">{dateMaturity} </p>
                </span>
                <span className="flex justify-between items-center mt-2">
                  <p className="text-foreground-secondary ">Carência:</p>
                  <p className="font-bold">{dateCarency}</p>
                </span>
              </div>
            </div>
          </article>
          <article className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  items-center  px-2 py-5 mt-5 border-border-dark border-t-sm border-b-sm ">
            <div className="flex gap-2 items-center">
              <Work fill="#7e7e7e" w="22" h="22" />
              <span>
                <p className="text-sm text-foreground-secondary">Instituição</p>
                <h3 className="font-bold">{revenue.instituition}</h3>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Clock fill="#7e7e7e" w="22" h="22" />
              <span>
                <p className="text-sm text-foreground-secondary">Liquidez</p>{" "}
                <h3 className="font-bold">{revenue.liquidez}</h3>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Percentage fill="#7e7e7e" w="22" h="22" />
              <span>
                <p className="text-sm text-foreground-secondary">Indexador</p>{" "}
                <h3 className="font-bold">{revenue.indexado?revenue.indexado:"Não indexado"}</h3>
              </span>
            </div>
          </article>
          <article className="mt-5 ">
            <div>
              <span className="flex gap-2 mb-2 items-center ">
                <Information w="20" h="20" />
                <h3 className="font-bold">Descrição</h3>
              </span>
              <p className="text-foreground-secondary text-sm">
                {revenue.description}
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
