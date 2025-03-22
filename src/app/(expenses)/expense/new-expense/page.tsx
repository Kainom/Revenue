import { Form } from "@/components/custom/Form";
import { CategorySelect } from "@/components/expense/CategorySelect";
import { InputDate } from "@/components/expense/InputDate";
import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import { storeExpense } from "@/services/expense";
import { ParcelaCheck } from "@/components/expense/ParcelaCheck";

export default function NewExpense(): ReactElement {
  return (
    <React.Fragment>
      <main className="mt-10 flex justify-center  p-4 w-full">
        <section className="bg-background-secondary w-2/5 p-6 rounded-sm">
          <article>
            <strong>
              <p className="text-xl">Add New Expense</p>
            </strong>
            <p className="text-sm mt-0.5 ">Enter your expense details below</p>
          </article>
          <article className="mt-8 ">
            <Form msg="Expense" msgButton="Expense" action={storeExpense}>
              <InputField
                properties={{
                  placeholder: "Enter expense name",
                  classN: "mb-4 border-border-light py-1.5",
                  width: "w-full",
                  name: "nome",
                  label: {
                    text: "Expense Name",
                    classN: "mb-2  flex text-sm font-bold",
                  },
                }}
              />
              <InputField
                properties={{
                  placeholder: "Enter grove name",
                  classN: "mb-4 border-border-light py-1.5",
                  width: "w-full",
                  name: "grove",
                  label: {
                    text: "Grove Name",
                    classN: "mb-2  flex text-sm font-bold",
                  },
                }}
              />
              <label className="w-full mb-2 flex text-sm font-bold">Date</label>
              <InputDate />
              <label className="w-full mb-2 flex text-sm font-bold">
                Category
              </label>
              <CategorySelect post={true} />
              <label className="w-full mb-2 flex text-sm font-bold">
                Description
              </label>

              <textarea
                className="w-full bg-background-secondary text-zinc-50 border-sm border-border-light rounded-sm py-2 px-4 resize-none mb-4 "
                id=""
                rows={3}
                cols={45}
                maxLength={159}
                placeholder="Add additional details about the expense"
                wrap="soft"
                name="description"
              ></textarea>
              <InputField
                properties={{
                  type: "number",
                  placeholder: "Enter amount",
                  classN: "mb-4 border-border-light py-1.5",
                  width: "w-full",
                  name: "value",
                  step:"any",
                  label: {
                    text: "Value",
                    classN: "mb-2  flex text-sm font-bold ",
                  },
                }}
              />
             <ParcelaCheck/>
            </Form>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
