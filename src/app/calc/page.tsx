import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";

export default function CalcPage(): ReactElement {
  return (
    <React.Fragment>
      <main className="bg-background-tertiary w-full items-center justify-center  flex-col flex p-2">
        <div className=" w-full  mb-5  p-4 pl-10">
          <h1 className="text-4xl max-[491px]:text-2xl ">Calcular seus investimentos</h1>
          <p className="text-foreground-secondary text-md max-[346px]:hidden ml-1">
            Calcule o retorno dos seus investimentos
          </p>
        </div>
        <div className="flex flex-col bg-background-secondary w-6/12 max-[405px]:w-11/12 rounded-md mb-5 px-4 py-3">
          <label className=" mt-4 mb-1 text-sm ">Valor inicial</label>
          <InputField
            properties={{
              type: "number",
              placeholder: "Valor inicial",
              width: "w-full",
            }}
          ></InputField>
          <label className="mt-4 mb-1 text-sm">% Taxa de Juros (% ao ano):</label>
          <InputField
            properties={{
              type: "number",
              placeholder: "Taxa de Retorno",
              width: "w-full",

            }}
          ></InputField>
          <label className="mt-4 mb-1 text-sm">Tempo de investimento:</label>
          <InputField
            properties={{
              type: "number",
              placeholder: "Tempo de investimento",
              width: "w-full",

            }}
          ></InputField>
          <button className="bg-green-500 px-8 py-2 rounded-sm my-5 hover:bg-green-600 transition-all duration-300 place-self-center">Calcular</button>
        </div>
        <div className="w-11/12">
          <p className="text-foreground-secondary text-md max-[346px]:hidden ml-1">
            Resultado do seu investimento
          </p>
          <div className="flex flex-col bg-background-primary w-6/12 max-[405px]:w-11/12 rounded-md px-4 py-3">
            <p className="text-foreground-secondary text-sm text-center">Retorno do Investimento:</p>
            <p className="text-foreground-primary text-4xl text-center">R$ 123,456.78</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
