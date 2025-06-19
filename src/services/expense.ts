"use server";
import { Expense, ExpenseTotalMonth } from "@/types/Expense";
import myAxios from "../../lib/axios";
import slugify from "slugify";
import { Parcela } from "@/types/Parcela";
import { parseISO } from "date-fns";
import { State } from "@/types/Message";
import { revalidatePath } from "next/cache";
import { Router } from "lucide-react";

export const allExpensesByYear = async (id: string): Promise<Expense[]> => {
  try {
    const response = await myAxios.get<Expense[]>(`/expenses/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching revenues", err);
    throw err;
  }
};

export const getAllExpensesByYearAndMonth = async (
  month: number,
  year: number
): Promise<Expense[]> => {
  try {
    //i use query params to get the year and month
    const response = await myAxios.get<Expense[]>(`/expenses/`, {
      params: {
        year: year,
        month: month,
      },
    });
    response.data.map((e) => {
      e.paymentDay = parseISO(e.paymentDay.toString());
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllTotalExpensesByYearOrUntilCurrentMonth = async (
  year: number,
  month?: number
): Promise<ExpenseTotalMonth[]> => {
  const params = {
    month,
  };
  try {
    const response = await myAxios.get<ExpenseTotalMonth[]>(
      `/expenses/total-year/${year}`,
      {
        params: params,
      }
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching revenues", err);
    throw err;
  }
};

export const getExpensesAtMonthByCategory = async (
  category: string,
  year: number,
  month: number
) => {
  try {
    const response = await myAxios.get<Expense[]>(
      `/expenses/category/${category}`,
      {
        params: {
          year: year,
          month: month,
        },
      }
    );
    response.data.map((e) => {
      e.paymentDay = parseISO(e.paymentDay.toString());
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getTotalExpenseAtYearAndMonth = async (
  year: number,
  month: number
): Promise<ExpenseTotalMonth> => {
  try {
    const response = await myAxios.get<ExpenseTotalMonth>(
      `/expenses/total-at-month/${year}-${month}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getThreeMonthMostExpensive = async (
  year: number,
  month?: number
): Promise<ExpenseTotalMonth[]> => {
  const params = {
    month,
  };
  try {
    const response = await myAxios.get<ExpenseTotalMonth[]>(
      `/expenses/total-three/${year}`,
      {
        params,
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getExpense = async (slug: string): Promise<Expense> => {
  try {
    const response = await myAxios.get<Expense>(`/expenses/slug/${slug}`);
    response.data.paymentDay = parseISO(response.data.paymentDay.toString());
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getExpenseById = async (id: string): Promise<Expense> => {
  try {
    const response = await myAxios.get<Expense>(`/expenses/${id}`);
    response.data.paymentDay = parseISO(response.data.paymentDay.toString());
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getTotalAmountInYear = async():Promise<number> => {
    try {
      const currentYear:number = new Date().getFullYear();
      const response = await myAxios.get<number>(`/expenses/total-amount/${currentYear}`)

      return response.data;

    } catch(err){
      return 501
    }
};


export const storeExpense = async (
  prevSate: State,
  form: FormData
): Promise<State> => {
  try {
    const quantidadeDeParcela = form.get("quantidadeDeParcela") as string;

    const parcela: Parcela | null = quantidadeDeParcela
      ? { quantidadeDeParcela }
      : null;

    const expense: Expense = {
      nome: form.get("nome") as string,
      value: parseFloat(form.get("value") as string),
      category: form.get("category") as string,
      paymentDay: new Date(form.get("dataCriacao") as string),
      description: form.get("description") as string,
      slug: slugify(form.get("nome") as string, { lower: true }),
      grove: form.get("grove") as string,
      parcela: parcela,
    };
    const response = await myAxios.post<Expense>("/expenses/", expense);

    return {
      isValid: true,
      message: "Expense registrado com sucesso!",
      error: { message: "", status: null },
    };
  } catch (err) {
    prevSate.isValid = false;
    prevSate.message = "";
    prevSate.error.message = `Erro ao registrar expense`;
    return prevSate;
  }
};

export const updateExpense = async (
  prevState: State,
  form: FormData,
): Promise<State> => {
  console.log(prevState.id);
  try {
    const quantidadeDeParcela = form.get("quantidadeDeParcela") as string;

    const parcela: Parcela | null = quantidadeDeParcela
      ? { quantidadeDeParcela }
      : null;

    const expense: Expense = {
      nome: form.get("nome") as string,
      value: parseFloat(form.get("value") as string),
      category: form.get("category") as string,
      paymentDay: new Date(form.get("dataCriacao") as string),
      description: form.get("description") as string,
      slug: slugify(form.get("nome") as string, { lower: true }),
      grove: form.get("grove") as string,
      parcela: parcela,
    };
    const response = await myAxios.put<Expense>(`/expenses/${prevState.id}`, expense);
    return {
      isValid: true,
      message: "Expense atualizado com sucesso!",
      error: { message: "", status: null },
      id: response.data.id,
    };
  } catch (err) {
    prevState.isValid = false;
    prevState.message = "";
    prevState.error.message = `Erro ao atualizar expense`;
    prevState.error.status = 404;
    return prevState;
  }
 
};
export const deleteExpense = async (
  id: string | undefined
): Promise<number> => {
  try {
    revalidatePath("/expense/archive");
    await myAxios.delete(`/expenses/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 250));
    return 200;
  } catch (err) {
    return 404;
  }
};

