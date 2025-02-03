import Image from "next/image";
import React, { ReactElement } from "react";
import Goblin from "@/assets/goblin.png";
import Email from "@/assets/email.svg";
import Local from "@/assets/local.svg";
import Cel from "@/assets/phone.svg";
import Balanced from "@/assets/balanced.svg";
import Conserved from "@/assets/conserved.svg";
import PenEdit from "@/assets/pen-edit.svg";
import Work from "@/assets/work.svg";
import UpArrow from "@/assets/trending-up.svg";
import { Dollar } from "@/components/custom/svg/Dollar";
import { ExpensesDivision, MoneyProgress } from "@/components/MoneyProgress";

export default function Perfil(): ReactElement {
  return (
    <React.Fragment>
      <section className="bg-background-tertiary flex flex-col items-center mt-0 p-3  pt-10">
        <article className="w-8/12 p-4 relative ">
          <div className="bg-background-secondary rounded-t-md h-32 flex items-center relative px-4">
            <div className="absolute -bottom-12 left-4  border-4 border-white rounded-full overflow-hidden">
              <Image
                src={Goblin}
                width={120}
                height={120}
                alt="goblin"
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-background-elevated rounded-b-md pt-12 pb-4 text-start h-20">
            <span className="absolute top-28 left-44 ml-4">
              <span className="flex gap-1 mb-1 items-center">
                <h1 className="text-xl font-semibold ">Goblin Choroso</h1>
                <span className="hover:bg-background-elevated px-1.5 py-1 rounded-sm cursor-pointer transition-all duration-300">
                  <Image src={PenEdit} alt="edit icon" />
                </span>
              </span>
              <p className="text-sm ">Meta de investimento: R$ 2000,00</p>
              <span className="flex items-center gap-2 absolute  w-full mt-1">
                <Image src={Balanced} alt="Enterprise icon" />
                <p className="text-sm">Perfil Moderado</p>
              </span>
            </span>
          </div>
        </article>
        <article className="w-8/12 p-4 relative  grid md:grid-cols-2  grid-cols-1 gap-6 ">
          <div className="bg-background-secondary p-6 rounded-md">
            <h1 className="text-lg mb-3">
              <strong>Informações Pessoais </strong>
            </h1>
            <label className="text-sm text-foreground-secondary">
              Profissão
            </label>
            <span className="flex gap-2 items-center mt-1 mb-4">
              <Image src={Local} width={16} color="" alt="location icon" />
              <p className="text-base">Estudante</p>
            </span>
            <label className="text-sm text-foreground-secondary">Empresa</label>
            <span className="flex gap-2 items-center mt-1 mb-4">
              <Image src={Work} width={16} color="" alt="location icon" />
              <p className="text-base">UEPG</p>
            </span>
          </div>
          <div className="bg-background-secondary p-6 rounded-md pb-20">
            <h1 className="text-lg mb-3">
              <strong>Informações Financeiras </strong>
            </h1>
            <label className="text-sm text-foreground-secondary">
              Renda Mensal
            </label>
            <span className="flex gap-2 items-center mt-1 mb-4">
              <Dollar w={"16px"} stroke="#7e7e7e" />
              <p className="text-base">R$ 4.500,00</p>
            </span>
            <label className="text-sm text-foreground-secondary">
              Salário Bruto
            </label>
            <span className="flex gap-2 items-center mt-1 mb-4">
              <Dollar w={"16px"} stroke="#7e7e7e" />
              <p className="text-base">R$ 4.450,00</p>
            </span>
            <label className="text-sm text-foreground-secondary ">
              {" "}
              Total Investido
            </label>
            <span className="flex gap-2 items-center mt-1 mb-4  ">
              <Image src={UpArrow} width={16} color="" alt="phone icon" />
              <p className="text-base">R$ 180.000,00</p>
            </span>
          </div>
        </article>
        <article className="w-8/12 p-4 relative  grid md:grid-cols-2  grid-cols-1 gap-6 ">
          <div className="bg-background-secondary p-4 px-6 rounded-md pb-20">
            <h1 className="text-lg mb-3"></h1>
            <strong>Objetivos financeiros</strong>
            <MoneyProgress
              current={10000}
              goal={15000}
              title="Aposentadoria"
              meta={true}
            />
            <MoneyProgress
              current={50000}
              goal={200000}
              title="Apartamento"
              meta={true}
            />
          </div>
          <div className="bg-background-secondary p-4 px-6 rounded-md pb-20">
            <h1 className="text-lg mb-3"></h1>
            <strong>Carteira de Investimentos</strong>
            <MoneyProgress current={250} goal={522} title="CDB" meta={true} />
            <MoneyProgress
              current={272}
              goal={522}
              title="TESOURO"
              meta={true}
            />
          </div>
        </article>
        <article className="w-8/12 p-4  relative grid  grid-cols-1 gap-6 ">
          <div className="bg-background-secondary p-4 px-6 rounded-md pb-10">
            <h1 className="text-lg mb-3"></h1>
            <strong>Distribuiçao do Gastos</strong>
            <ExpensesDivision value={350} total={522} title="Essenciais" />
            <ExpensesDivision value={250} total={522} title="Não Essenciais" />
            <ExpensesDivision value={350} total={522} title="Investimentos" />
          </div>
        </article>
        <article className=" w-8/12 p-4 relative  gap-6">
          <div className="bg-background-elevated rounded-md p-6">
            <h1 className="text-primary-600 mb-2 text-lg">
              <strong>Sobre</strong>
            </h1>
            <p>
              Investidor há 3 anos, focado em construir um patrimônio sólido
              através de uma estratégia diversificada. Busco equilibrar
              investimentos em renda fixa e variável, sempre priorizando o longo
              prazo e a consistência.
            </p>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
