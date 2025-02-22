  import { InputField } from "@/components/Inputs/InputField";
  import { Select } from "@/components/Inputs/Select";
  import React, { ReactElement } from "react";

  export default function NewRevenue(): ReactElement {
    return (
      <React.Fragment>
        <main className=" flex justify-center p-4">
          <section className="grid grid-cols-1 border-sm border-border-dark  w-3/4 p-4 rounded-md shadow-md">
            <div className="ml-2 mb-5">
              <h2 className="text-3xl mt-4">New Revenue</h2>
              <p className="text-foreground-secondary text-sm">
                Preencha os dados para criar uma nova receita de investimento
              </p>
            </div>
            <article className="">
              <form action="#" className="grid grid-cols-1 gap-3  p-2 ">
                <h3 className="text-bold text-xl">Informações Básicas</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 border-b-sm border-border-dark pb-8 mt-2">
                  <InputField
                    properties={{
                      placeholder: "Nome",
                      type: "text",
                      classN: "py-1.5",
                      width: "w-full",
                      label: {
                        text: "Nome",
                        width: "w-full",
                      },
                    }}
                  ></InputField>
                  <InputField
                    properties={{
                      placeholder: "Sobrenome",
                      type: "text",
                      classN: "py-1.5",
                      width: "w-full",
                      label: {
                        text: "Sobrenome",
                        width: "w-full",
                      },
                    }}
                  ></InputField>
                </div>
                <h3 className="text-bold text-xl mt-5">
                  Informações Financeiras
                </h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))]  gap-4 mt-2 border-b-sm border-border-dark pb-8">
                  <InputField
                    properties={{
                      placeholder: "Investimento",
                      type: "number",
                      width: "w-full",
                      classN: " py-1.5",
                      label: {
                        text: "Investimento",
                        width: "w-full",
                      },
                    }}
                  ></InputField>
                  <InputField
                    properties={{
                      placeholder: "Rendimento",
                      type: "number",
                      width: "w-full",
                      classN: " py-1.5",
                      label: {
                        text: "Rendimento",
                        width: "w-full",
                      },
                    }}
                  ></InputField>
                  <InputField
                    properties={{
                      placeholder: "Valor final Bruto",
                      type: "number",
                      width: "w-full",
                      classN: " py-1.5",
                      label: {
                        text: "Lucro Bruto",
                        width: "w-full",
                      },
                    }}
                  ></InputField>
                </div>
                <h3 className="text-bold text-xl mt-5">Datas</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 border-b-sm border-border-dark pb-6 mt-2">
                  <InputField
                    properties={{
                      type: "date",
                      width: "w-full",
                      label: {
                        text: "Criação",
                        width: "w-full",
                      },
                    }}
                  />
                  <InputField
                    properties={{
                      type: "date",
                      width: "w-full",
                      label: {
                        text: "Vencimento",
                        width: "w-full",
                      },
                    }}
                  />
                  <InputField
                    properties={{
                      type: "date",
                      width: "w-full",
                      label: {
                        text: "Carência",
                        width: "w-full",
                      },
                    }}
                  />
                </div>
                <h3 className="text-bold text-xl mt-5">
                  Informações Adicionais
                </h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4  mt-2">
                  <InputField
                    properties={{
                      type: "text",
                      width: "w-full",
                      placeholder: "Banco ",
                      label: {
                        text: "Instituição",
                        width: "w-full",
                      },
                    }}
                  />
                  <Select
                    props={{
                      properties: {
                        options: [
                          { value: "Diária", text: "Diária" },
                          { value: "A mercado", text: "A mercado" },
                          { value: "No vencimento", text: "No vencimento" },
                        ],
                        width: "w-full",
                      },
                    }}
                    label={{
                      text: "Liquidez",
                      width: "w-full",
                    }}
                  />

                  <Select
                    props={{
                      properties: {
                        options: [
                          { value: "SELIC", text: "SELIC" },
                          { value: "CDB", text: "CDB" },
                          { value: "IPCA", text: "IPCA" },
                        ],
                        width: "w-full",
                      },
                    }}
                    label={{
                      text: "Indexador",
                      width: "w-full",
                    }}
                  />
                  <Select
                    props={{
                      properties: {
                        options: [
                          { value: "Fixa", text: "Fixa" },
                          { value: "Variável", text: "Variável" },
                        ],
                        width: "w-full",
                      },
                    }}
                    label={{
                      text: "Tipo",
                      width: "w-full",
                    }}
                  />
                </div>
                <div>
                  <label>Descrição</label>
                  <textarea
                    className="w-full bg-background-secondary text-zinc-50 border-sm border-border-light rounded-sm py-3 px-4 resize-none  mt-2 outline-none"
                    name=""
                    id=""
                    rows={2}
                    cols={45}
                    maxLength={192}
                    placeholder="Add additional details about the expense"
                    wrap="soft"
                  ></textarea>
                </div>
                <div className="flex mt-5 gap-2">
                  <button className="py-1.5 px-10 bg-foreground-primary text-background-primary hover:bg-zinc-200 rounded-sm duration-300 transition-all">
                    Criar
                  </button>
                  <button className="py-1.5 px-10 hover:bg-background-secondary rounded-sm border-sm border-border-dark duration-300 transition-all">
                    Cancelar
                  </button>
                </div>
              </form>
            </article>
          </section>
        </main>
      </React.Fragment>
    );
  }
