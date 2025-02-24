import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import Pig from "@/assets/pig-money.svg";
import Percentage from "@/assets/percentage.svg";
import Calendar from "@/assets/calendar.svg";
import ArrowUp from "@/assets/trending-up.svg";
import Calc from "@/assets/calc.svg";
import Image from "next/image";
export default function CalcPage(): ReactElement {
  return (
    <React.Fragment>
      <main className="flex ml-16  flex-col">
        <article className=" mb-5  p-4 pl-10">
          <div className="flex ">
            <Image className="" src={Calc} alt="Calc icon"></Image>
            <h1 className="text-4xl max-[491px]:text-2xl ">
              Calculadora de investimentos
            </h1>
          </div>
          <p className="text-foreground-secondary text-md max-[346px]:hidden ml-1">
            Calcule o retorno dos seus investimentos
          </p>
        </article>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center  p-10">
          <article className="flex flex-col border-border-dark border-sm  rounded-md mb-5 px-4 py-3">
            <label className=" mt-4 mb-1 text-sm flex items-center content-center text-center gap-2">
              <Image
                className="mb-2"
                src={Pig}
                width={16}
                color="white"
                alt="pig icon"
              ></Image>
              <span>Valor inicial (R$)</span>
            </label>
            <InputField
              properties={{
                type: "number",
                placeholder: "Valor inicial",
                width: "w-full",
              }}
            ></InputField>
            <label className=" mt-4 mb-1 text-sm flex items-center content-center text-center gap-2">
              <Image
                className="mb-2"
                src={Percentage}
                width={16}
                color="white"
                alt="pig icon"
              ></Image>
              Taxa de Juros (% ao ano):
            </label>
            <InputField
              properties={{
                type: "number",
                placeholder: "Taxa de Retorno",
                width: "w-full",
              }}
            ></InputField>
            <label className="mt-4 mb-1 text-sm flex items-center content-center text-center gap-2 content-center">
              <Image
                className="mb-2"
                src={Percentage}
                width={16}
                color="white"
                alt="pig icon"
              ></Image>
              Inflação (% ao ano):
            </label>
            <InputField
              properties={{
                type: "number",
                placeholder: "Inflação",
                width: "w-full",
              }}
            ></InputField>
            <label className=" mt-4 mb-1 text-sm flex items-center content-center text-center gap-2">
              <Image
                className="mb-2"
                src={Calendar}
                width={16}
                color="white"
                alt="pig icon"
              ></Image>
              Tempo de investimento:
            </label>
            <InputField
              properties={{
                type: "number",
                placeholder: "Tempo de investimento",
                width: "w-full",
              }}
            ></InputField>
            <button className="bg-green-500 px-8 py-2 rounded-sm mb-5 mt-20 hover:bg-green-600 transition-all duration-300 place-self-center ">
              Calcular
            </button>
          </article>
          <article className="border-border-dark border-sm p-4 rounded-md mb-5 px-4 py-3 ">
            <h2 className="text-xl max-[346px]:hidden ml-1 mt-5 mb-8">
              Resultado da Simulação
            </h2>

            <div className="grid grid-cols-1 min-[508px]:grid-cols-2 gap-3 justify-between">
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Desconto da Inflação</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 40,00
                </p>
              </div>
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Desconto do Imposto de renda</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 15,00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 min-[508px]:grid-cols-2 gap-3 justify-between">
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Saque possível</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 45,00
                </p>
              </div>
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Juros totais</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 100,00
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[508px]:grid-cols-3 gap-3 justify-between">
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Inicial</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 1.000,00
                </p>
              </div>
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Valor Final Bruto </p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 1.100,00
                </p>
              </div>
              <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Valor final liquído</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 1.060,00
                </p>
              </div>
            </div>
             <div className="mt-5 bg-background-secondary rounded-md px-5 py-3">
                <p className=" text-sm ">Valor conservado pela inflação</p>
                <p className="min-[360px]:text-xl text-accent-green-hover ">
                  R$ 1.040,00
                </p>
              </div>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
