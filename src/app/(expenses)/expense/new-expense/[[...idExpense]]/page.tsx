import { Form } from "@/components/custom/Form";
import { CategorySelect } from "@/components/expense/CategorySelect";
import { InputDate } from "@/components/expense/InputDate";
import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import { getExpenseById, storeExpense, updateExpense } from "@/services/expense";
import { ParcelaCheck } from "@/components/expense/ParcelaCheck";
import { Expense } from "@/types/Expense";
import { notFound } from "next/navigation";

type Props = {
  params: {
    idExpense?: string | string[];
  };
};

export default async function NewExpense({
  params,
}: Props): Promise<ReactElement> {
  const { idExpense } = await params;
  let expense: Expense | undefined = undefined;
  
  if (idExpense) {
    try {
      expense = await getExpenseById(idExpense.toString());
    } catch (err) {
      notFound();
    }
  }

  const isEditing = !!idExpense;

  return (
    <main className="ml-16 flex-1 mt-10 flex justify-center p-4 w-full">
      <section className="bg-background-secondary w-full max-w-2xl p-6 rounded-lg shadow-lg">
        <article>
          <strong>
            <p className="text-2xl">
              {isEditing ? `Update ${expense?.nome}` : "Add New Expense"}
            </p>
          </strong>
          <p className="text-sm mt-1 text-gray-400">
            Enter your expense details below
          </p>
        </article>

        <article className="mt-8">
          <Form 
            msg="Expense" 
            msgButton={isEditing ? "Update Expense" : "Add Expense"} 
            action={isEditing ? updateExpense : storeExpense} 
            id={idExpense as string}
          >
            <InputField
              properties={{
                placeholder: "Enter expense name",
                classN: "mb-4 border-border-light py-2",
                width: "w-full",
                name: "nome",
                value: isEditing ? expense?.nome : "",
                label: {
                  text: "Expense Name",
                  classN: "mb-2 flex text-sm font-bold",
                },
              }}
            />

            <InputField
              properties={{
                placeholder: "Enter grove name",
                classN: "mb-4 border-border-light py-2",
                width: "w-full",
                name: "grove",
                value: isEditing ? expense?.grove : "",
                label: {
                  text: "Grove Name",
                  classN: "mb-2 flex text-sm font-bold",
                },
              }}
            />

            <label className="w-full mb-2 flex text-sm font-bold">
              Date
            </label>
            <InputDate />

            <label className="w-full mb-2 flex text-sm font-bold">
              Category
            </label>
            <CategorySelect post={true} category={expense?.category} />

            <label className="w-full mb-2 flex text-sm font-bold">
              Description
            </label>
            <textarea
              className="w-full bg-background-secondary text-zinc-50 border border-border-light rounded-sm py-2 px-4 resize-none mb-4 focus:border-purple-500/50 focus:outline-none transition-colors"
              rows={3}
              maxLength={159}
              placeholder="Add additional details about the expense"
              defaultValue={isEditing ? expense?.description : ""}
              name="description"
            />

            <InputField
              properties={{
                type: "number",
                placeholder: "Enter amount",
                classN: "mb-4 border-border-light py-2",
                width: "w-full",
                name: "value",
                value: isEditing ? expense?.value.toString() : "",
                step: "0.01",
                label: {
                  text: "Value",
                  classN: "mb-2 flex text-sm font-bold",
                },
              }}
            />

            <ParcelaCheck expense={expense} />
          </Form>
        </article>
      </section>
    </main>
  );
}