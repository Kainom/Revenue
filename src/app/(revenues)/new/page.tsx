import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";

export default function NewRevenue(): ReactElement {
  return (
    <React.Fragment>
      <main className="mt-10  flex justify-center p-4">
        <section className="grid grid-cols-1 bg-background-secondary w-2/4 p-4 rounded-md shadow-md">
          <strong>
            <h1 className="text-3xl text-primary-600 place-self-center my-4">
              New Revenue
            </h1>
          </strong>
          <article className="">
            <form action="#" className="grid grid-cols-1 gap-3  p-2">
              <div className="flex flex-col gap-1">
                <label className=" place-self-center w-11/12   ">Nome</label>
                <InputField
                  properties={{
                    placeholder: "Nome",
                    type: "text",
                    width: "w-11/12",
                    classN: "place-self-center py-1.5",
                  }}
                ></InputField>
              </div>
              <div className="flex flex-col gap-1">
                <label className=" place-self-center w-11/12   ">Investimento</label>
                <InputField
                  properties={{
                    placeholder: "Investimento",
                    type: "number",
                    width: "w-11/12",
                    classN: "place-self-center py-1.5",
                  }}
                ></InputField>
              </div>
              <div className="flex flex-col gap-1">
                <label className=" place-self-center w-11/12   ">Rendimento</label>
                <InputField
                  properties={{
                    placeholder: "Rendimento",
                    type: "number",
                    width: "w-11/12",
                    classN: "place-self-center py-1.5",
                  }}
                ></InputField>
              </div>
              <div className="flex flex-col gap-1">
                <label className=" place-self-center w-11/12   ">Data de Criação
                </label>
                <InputField
                  properties={{
                    placeholder: "Data de Criação",
                    type: "date",
                    width: "w-11/12",
                    classN: "place-self-center py-1.5",
                  }}
                ></InputField>
              </div>
              <div className="flex flex-col gap-1">
                <label className=" place-self-center w-11/12   ">Instituição
                </label>
                <InputField
                  properties={{
                    placeholder: "Instituição",
                    type: "text",
                    width: "w-11/12",
                    classN: "place-self-center py-1.5",
                  }}
                ></InputField>
              </div>
            </form>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
