import { Form } from "@/components/custom/Form";
import { CategorySelect } from "@/components/expense/CategorySelect";
import { InputDate } from "@/components/expense/InputDate";
import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import { getExpenseById, storeExpense, updateExpense } from "@/services/expense";
import { ParcelaCheck } from "@/components/expense/ParcelaCheck";
import { Expense } from "@/types/Expense";
import { notFound } from "next/navigation";
import { Edit3, Plus, DollarSign, Calendar, Tag, FileText, FolderOpen } from "lucide-react";

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
    <main className="flex-1 flex justify-center overflow-auto px-4 py-6 md:px-6 md:py-8">
      <section className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border-sm border-border-dark w-full max-w-2xl rounded-lg shadow-2xl">
        
        {/* Header */}
        <article className="border-b border-zinc-800/50 px-6 py-5">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
              isEditing 
                ? "bg-blue-500/20 border-4 border-blue-500/30" 
                : "bg-gradient-to-br from-red-500/20 to-red-600/10 border-4 border-red-500/30"
            }`}>
              {isEditing ? (
                <Edit3 className="w-5 h-5 text-blue-400" />
              ) : (
                <Plus className="w-5 h-5 text-red-400" />
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">
                {isEditing ? `Update ${expense?.nome}` : "Add New Expense"}
              </h1>
              <p className="text-sm text-zinc-400 mt-1">
                {isEditing 
                  ? "Modify the expense details below" 
                  : "Enter your expense details to track your spending"}
              </p>
            </div>
          </div>
        </article>

        {/* Form */}
        <article className="px-6 py-6">
          <Form 
            msg="Expense" 
            msgButton={isEditing ? "Update Expense" : "Add Expense"} 
            action={isEditing ? updateExpense : storeExpense} 
            id={idExpense as string}
          >
            <div className="space-y-5">
              
              {/* Expense Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <FileText className="w-4 h-4 text-zinc-400" />
                  Expense Name
                </label>
                <InputField
                  properties={{
                    placeholder: "e.g., Monthly groceries, Gym membership",
                    classN: "border-zinc-700/50 py-2.5 bg-zinc-900/40 focus:border-red-500/50 focus:bg-zinc-900/60",
                    width: "w-full",
                    name: "nome",
                    value: isEditing ? expense?.nome : "",
                  }}
                />
              </div>

              {/* Grove Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <FolderOpen className="w-4 h-4 text-zinc-400" />
                  Grove Name
                </label>
                <InputField
                  properties={{
                    placeholder: "Enter grove or group name",
                    classN: "border-zinc-700/50 py-2.5 bg-zinc-900/40 focus:border-red-500/50 focus:bg-zinc-900/60",
                    width: "w-full",
                    name: "grove",
                    value: isEditing ? expense?.grove : "",
                  }}
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  Date
                </label>
                <InputDate />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <Tag className="w-4 h-4 text-zinc-400" />
                  Category
                </label>
                <CategorySelect post={true} category={expense?.category} />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <FileText className="w-4 h-4 text-zinc-400" />
                  Description
                  <span className="text-xs text-zinc-500 font-normal">(optional)</span>
                </label>
                <textarea
                  className="w-full bg-zinc-900/40 text-zinc-50 border border-zinc-700/50 rounded-md py-2.5 px-4 resize-none focus:border-red-500/50 focus:bg-zinc-900/60 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all placeholder:text-zinc-600"
                  rows={3}
                  maxLength={159}
                  placeholder="Add additional details about the expense..."
                  defaultValue={isEditing ? expense?.description : ""}
                  name="description"
                />
                <p className="text-xs text-zinc-500">Maximum 159 characters</p>
              </div>

              {/* Value */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <DollarSign className="w-4 h-4 text-zinc-400" />
                  Value
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">
                    R$
                  </span>
                  <InputField
                    properties={{
                      type: "number",
                      placeholder: "0.00",
                      classN: "border-zinc-700/50 py-2.5 pl-12 bg-zinc-900/40 focus:border-red-500/50 focus:bg-zinc-900/60",
                      width: "w-full",
                      name: "value",
                      value: isEditing ? expense?.value.toString() : "",
                      step: "0.01",
                    }}
                  />
                </div>
              </div>

              {/* Parcela Check */}
              <div className="pt-2 border-t border-zinc-800/50">
                <ParcelaCheck expense={expense} />
              </div>
            </div>
          </Form>
        </article>
      </section>
    </main>
  );
}