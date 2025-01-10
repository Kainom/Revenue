import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";

export default function CalcPage(): ReactElement {
  return (
    <React.Fragment>
      <main className="bg-red-200 w-full items-center justify-center p-10 flex-col flex">
        <h1 className="text-4xl mb-10">Calcular seus investimentos</h1>
        <div className="flex flex-col items-center bg-background-tertiary w-11/12 p-10">
          <label  className="w-2/4">Valor inicial:</label>
          <InputField
            properties={{
              type: "number",
              placeholder: "Valor inicial",
              width: 400,
            }}
          ></InputField>
          <label className="w-2/4">Taxa de retorno:</label>
          <InputField
            properties={{
              type: "number",
              placeholder: "Taxa de Retorno",
              width: 400,
            }}
          ></InputField>
          <label className="w-2/4">Tempo de investimento:</label>
          <InputField
            properties={{
              type: "number",
              placeholder: "Tempo de investimento",
              width: 400,
            }}
          ></InputField>
          <button>Calcular</button>
        </div>
      </main>
    </React.Fragment>
  );
}
