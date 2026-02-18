import { Form } from "@/components/custom/Form";
import { InputField } from "@/components/Inputs/InputField";
import { Select } from "@/components/Inputs/Select";
import { createRevenue } from "@/services/api";
import React, { ReactElement } from "react";

export default async function NewRevenue(): Promise<ReactElement> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main className="flex-1 flex justify-center overflow-auto px-4 py-4 md:px-6 md:py-6">
      
      <section className=" w-full max-w-5xl p-4 md:p-5 rounded-md shadow-md border-sm border-border-dark">

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">New Revenue</h2>
          <p className="text-foreground-secondary text-sm">
            Preencha os dados para criar uma nova receita de investimento
          </p>
        </div>

        <article>
          <Form
            action={createRevenue}
            classN="grid grid-cols-1 gap-3 p-2"
            classBtn="w-full md:w-1/4"
            msg="Revenue"
            msgButton="Revenue"
            loading={{
              bg: "none",
              size: "size-3",
            }}
          >

            {/* Informações Básicas */}
            <h3 className="text-lg font-semibold mt-2">
              Informações Básicas
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 border-b-sm border-border-dark pb-6 mt-2">
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
              />
            </div>

            {/* Informações Financeiras */}
            <h3 className="text-lg font-semibold mt-4">
              Informações Financeiras
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mt-2 border-b-sm border-border-dark pb-6">
              
              <InputField
                properties={{
                  placeholder: "Investimento",
                  name: "investimento",
                  type: "number",
                  step: "any",
                  width: "w-full",
                  classN: "py-1.5",
                  label: {
                    text: "Investimento",
                    width: "w-full",
                  },
                }}
              />

              <InputField
                properties={{
                  placeholder: "Rendimento",
                  name: "rendimento",
                  type: "number",
                  step: "any",
                  width: "w-full",
                  classN: "py-1.5",
                  label: {
                    text: "Rendimento",
                    width: "w-full",
                  },
                }}
              />

              <InputField
                properties={{
                  placeholder: "Lucro Bruto",
                  name: "finalInvestimento",
                  type: "number",
                  step: "any",
                  width: "w-full",
                  classN: "py-1.5",
                  label: {
                    text: "Lucro Bruto",
                    width: "w-full",
                  },
                }}
              />

            </div>

            {/* Datas */}
            <h3 className="text-lg font-semibold mt-4">Datas</h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 border-b-sm border-border-dark pb-6 mt-2">

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

            {/* Informações adicionais */}
            <h3 className="text-lg font-semibold mt-4">
              Informações Adicionais
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mt-2">

              <InputField
                properties={{
                  type: "text",
                  name: "instituition",
                  width: "w-full",
                  placeholder: "Banco",
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

            {/* Descrição */}
            <div className="mt-2">
              <label className="text-sm font-medium">Descrição</label>

              <textarea
                className="w-full bg-background-secondary text-zinc-50 border-sm border-border-light rounded-sm py-2 px-3 resize-none mt-2 outline-none"
                name="description"
                rows={2}
                maxLength={192}
                placeholder="Add additional details about the expense"
              />
            </div>

          </Form>
        </article>

      </section>
    </main>
  );
}
