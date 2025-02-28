"use server";
import { Expense, ExpenseTotalMonth } from "@/types/Expense";
import myAxios from "../../lib/axios";
import slugify from "slugify";

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

export const getAllExpensesByYearAndMonth = async (month:number,year:number): Promise<Expense[]> => {
  try {
    //i use query params to get the year and month
    const response = await myAxios.get<Expense[]>(`/expenses/`, {
      params: {
        year:year,
        month: month
      }
    });
    response.data.map((e) => {
      e.dataCriacao = new Date(e.dataCriacao);
    })
    return response.data;
  } catch (err) {
    throw err;
  }
}

export const getAllTotalExpensesByYear = async (
  year: number
): Promise<ExpenseTotalMonth[]> => {
  try {
    const response = await myAxios.get<ExpenseTotalMonth[]>(
      `/expenses/total-year/${year}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching revenues", err);
    throw err;
  }
};
  
export const getExpensesAtMonthByCategory = async (category: string,year:number,month:number) => {
  try {
    const response = await myAxios.get<Expense[]>(`/expenses/category/${category}`, {
      params: {
        year: year,
        month: month
      }
    });
    response.data.map((e) => {
      e.dataCriacao = new Date(e.dataCriacao);
    })
    return response.data;
  } catch (err) {
    throw err;
  }

}

export const getTotalExpenseAtYearAndMonth = async (year:number,month:number):Promise<ExpenseTotalMonth> => {
  try {
    const response = await myAxios.get<ExpenseTotalMonth>(`/expenses/total-at-month/${year}-${month}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export const getThreeMonthMostExpensive = async (
  year: number
): Promise<ExpenseTotalMonth[]> => {
  try {
    const response = await myAxios.get<ExpenseTotalMonth[]>(
      `/expenses/total-three/${year}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getExpense = async (slug: string): Promise<Expense> => {
  try {
    const response = await myAxios.get<Expense>(`/expenses/slug/${slug}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

type Message = {
  isValid: boolean;
  message: string;
  error: {
    message: string;
    status: null;
  };
};



export const storeExpense = async (
  prevSate: Message,
  form: FormData
): Promise<Message> => {
  try {
    const expense: Expense = {
      nome: form.get("nome") as string,
      value: parseFloat(form.get("value") as string),
      category: form.get("category") as string,
      dataCriacao: new Date(form.get("dataCriacao") as string),
      description: form.get("description") as string,
      slug: slugify(form.get("nome") as string, { lower: true }),
    };
    const response = await myAxios.post<Expense>("/expenses/", expense);
    new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(response.data);
    return {
      isValid: true,
      message: "Expense stored successfully!",
      error: { message: "", status: null },
    };
  } catch (err) {
    prevSate.isValid = false;
    prevSate.message = "";
    prevSate.error.message = `Error storing expense`;
    return prevSate;
  }
};
