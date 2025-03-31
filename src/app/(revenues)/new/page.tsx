import { Form } from "@/components/custom/Form";
import { InputField } from "@/components/Inputs/InputField";
import { Select } from "@/components/Inputs/Select";
import { createRevenue } from "@/services/api";
import React, { ReactElement } from "react";

export default async function NewRevenue(): Promise<ReactElement> {
  await new Promise((resolve) => setTimeout(resolve, 500));

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
            <Form
              action={createRevenue}
              classN="grid grid-cols-1 gap-3  p-2 "
              classBtn={"w-1/6"}
              msg="Revenue"
              msgButton="Revenue"
              loading={{
                bg: "none",
                size: "size-3",
              }}
            >
              <h3 className="text-bold text-xl">Informações Básicas</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 border-b-sm border-border-dark pb-8 mt-2">
                <InputField
                  properties={{
                    placeholder: "Nome",
                    name: "name",
                    type: "text",
                    classN: "py-1.5",
                    width: "w-full",
                    label: {
                      text: "Nome",
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
                    name: "investimento",
                    type: "number",
                    step: "any",
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
                    name: "rendimento",
                    type: "number",
                    step: "any",
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
                    name: "finalInvestimento",
                    type: "number",
                    step: "any",
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
                    name: "dataCriacao",
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
                    name: "vencimento",
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
                    name: "carencia",
                    width: "w-full",
                    label: {
                      text: "Carência",
                      width: "w-full",
                    },
                  }}
                />
              </div>
              <h3 className="text-bold text-xl mt-5">Informações Adicionais</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4  mt-2">
                <InputField
                  properties={{
                    type: "text",
                    name: "instituition",
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
                      name: "liquidez",
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
                      name: "indexado",
                      options: [
                        { value: "", text: "Nenhum" },
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
                      name: "tipo",
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
                  name="description"
                  id=""
                  rows={2}
                  cols={45}
                  maxLength={192}
                  placeholder="Add additional details about the expense"
                  wrap="soft"
                ></textarea>
              </div>
            </Form>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
