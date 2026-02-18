import Image from "next/image";
import React, { ReactElement } from "react";
import Local from "@/assets/local.svg";
import Balanced from "@/assets/balanced.svg";
import PenEdit from "@/assets/pen-edit.svg";
import Work from "@/assets/work.svg";
import UpArrow from "@/assets/trending-up.svg";
import { Dollar } from "@/components/custom/svg/Dollar";
import { ExpensesDivision, MoneyProgress } from "@/components/MoneyProgress";
import { User, Plus } from "lucide-react";

export default async function Perfil(): Promise<ReactElement> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const cardStyle =
    "bg-zinc-900/60 backdrop-blur-md ring-1 ring-white/5 rounded-lg shadow-sm transition-all duration-300 hover:ring-white/10";

  return (
    <section className="flex flex-col items-center p-4 pt-8 pb-12">

      {/* CARD SUPERIOR */}
      <article className="w-full max-w-5xl mb-8">
        <div className="relative bg-gradient-to-br from-red-950/20 via-zinc-900/50 to-black/70 
        ring-1 ring-white/5 rounded-lg p-6 backdrop-blur-md shadow-sm">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

            {/* FOTO */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-lg overflow-hidden 
              ring-1 ring-white/10 bg-zinc-900/70 
              flex items-center justify-center shadow-sm">
                <User className="w-12 h-12 text-zinc-600" strokeWidth={1.4} />
              </div>

              <button className="absolute -bottom-1 -right-1 w-7 h-7 
              bg-zinc-800/90 hover:bg-zinc-700 
              ring-1 ring-white/10 rounded-full 
              flex items-center justify-center 
              transition-all duration-200 shadow-sm">
                <Plus className="w-4 h-4 text-zinc-300" strokeWidth={2} />
              </button>
            </div>

            {/* INFO */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-semibold text-white truncate">
                  Goblin Choroso
                </h1>

                <button className="hover:bg-white/5 p-1.5 rounded-md transition-all">
                  <Image
                    src={PenEdit}
                    alt="edit icon"
                    width={16}
                    height={16}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  />
                </button>
              </div>

              <p className="text-sm text-zinc-400 mb-2">
                Meta de investimento: R$ 2.000,00
              </p>

              <div className="flex items-center gap-2">
                <Image src={Balanced} alt="Perfil icon" width={14} height={14} />
                <p className="text-sm text-zinc-400">Perfil Moderado</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* GRID */}
      <article className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className={`${cardStyle} p-5`}>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Informações Pessoais
          </h2>

          <InfoRow label="Profissão" value="Estudante" icon={<Image src={Local} width={16} height={16} alt="icon" />} />
          <InfoRow label="Empresa" value="UEPG" icon={<Image src={Work} width={16} height={16} alt="icon" />} />
        </div>

        <div className={`${cardStyle} p-5`}>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Informações Financeiras
          </h2>

          <InfoRow label="Renda Mensal" value="R$ 4.500,00" icon={<Dollar w="16px" stroke="#9ca3af" />} />
          <InfoRow label="Salário Bruto" value="R$ 4.450,00" icon={<Dollar w="16px" stroke="#9ca3af" />} />
          <InfoRow label="Total Investido" value="R$ 180.000,00" icon={<Image src={UpArrow} width={16} height={16} alt="icon" />} />
        </div>
      </article>

      {/* OBJETIVOS E CARTEIRA */}
      <article className="w-full max-w-5xl mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className={`${cardStyle} p-5`}>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Objetivos Financeiros
          </h2>
          <MoneyProgress current={10000} goal={15000} title="Aposentadoria" meta />
          <MoneyProgress current={50000} goal={200000} title="Apartamento" meta />
        </div>

        <div className={`${cardStyle} p-5`}>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Carteira de Investimentos
          </h2>
          <MoneyProgress current={250} goal={522} title="CDB" meta />
          <MoneyProgress current={272} goal={522} title="TESOURO" meta />
        </div>
      </article>

      {/* DISTRIBUIÇÃO */}
      <article className="w-full max-w-5xl mt-4">
        <div className={`${cardStyle} p-5`}>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Distribuição de Gastos
          </h2>

          <ExpensesDivision value={350} total={522} title="Essenciais" />
          <ExpensesDivision value={150} total={522} title="Não Essenciais" />
          <ExpensesDivision value={22} total={522} title="Investimentos" />
        </div>
      </article>

      {/* SOBRE */}
      <article className="w-full max-w-5xl mt-4">
        <div className={`${cardStyle} p-5`}>
          <h2 className="text-lg font-semibold mb-3 text-red-500">
            Sobre
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Investidor há 3 anos, focado em construir patrimônio com estratégia diversificada.
          </p>
        </div>
      </article>
    </section>
  );
}

function InfoRow({ label, value, icon }: any) {
  return (
    <div className="mb-4">
      <label className="text-xs text-zinc-500 uppercase tracking-wide block mb-1">
        {label}
      </label>
      <div className="flex gap-2 items-center text-zinc-200">
        <div className="opacity-60">{icon}</div>
        {value}
      </div>
    </div>
  );
}
