"use server"
import { Expense, ExpenseTotalMonth } from "@/types/Expense";
import myAxios from "@/utils/axios";
import slugify from "slugify";

export const allExpensesByYear = async (id:string): Promise<Expense[]> => {
  try {
    const response = await myAxios.get<Expense[]>(`/expenses/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching revenues", err);
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
    message: string ;
    status:  null;
  } ;
};


export const getAllTotalExpensesByYear = async (): Promise<ExpenseTotalMonth[]> => { 
  return new Promise((resolve, reject) => {
    const year:number = new Date().getFullYear();
    return myAxios.get<ExpenseTotalMonth[]>(`/expenses/total-month/${year}`)
      .then((response) => {
        console.log(response.data)
        return resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}


export const storeExpense = async (prevSate:Message,form: FormData): Promise<Message> => {
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
    return { isValid: true, message: "Expense stored successfully!" ,error:{message:"",status:null}};
    

  } catch (err) {
    prevSate.isValid = false;
    prevSate.message = "";
    prevSate.error.message = `Error storing expense`;
    return prevSate;
  }
};


