"use server";
import { Revenue } from "@/types/Revenue";
import myAxios from "../../lib/axios";
import slugify from "slugify";
import { parseISO } from "date-fns";
import { revalidatePath } from "next/cache";
import { State } from "@/types/Message";

export const getRevenues = async (): Promise<Revenue[]> => {
  try {
    const response = await myAxios.get<Revenue[]>("/revenues/");
    response.data.map((e) => {
      e.vencimento = new Date(e.vencimento);
    });
   
    return response.data;
  } catch (err) {
    return [];
  }
};

export const getRevenue = async (slug: string): Promise<Revenue | null> => {
  try {
    const response = await myAxios.get<Revenue>(`/revenues/slug/${slug}`);
    response.data.vencimento = parseISO(response.data.vencimento.toString());
    response.data.carencia = parseISO(response.data.carencia.toString());
    response.data.dataCriacao = parseISO(response.data.dataCriacao.toString());

    return response.data;
  } catch (err) {
    return null;
  }
};

export const deleteRevenue = async (
  id: string | undefined
): Promise<number> => {
  try {
    revalidatePath("/bag");
    const response = await myAxios.delete(`/revenues/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return response.status;
  } catch (err) {
    return 404;
  }
};

export const createRevenue = async (
  prevSate: State,
  form: FormData
): Promise<State> => {
  try {
    const revenue: Revenue = {
      nome: form.get("name") as string,
      investimento: parseFloat(form.get("investimento") as string),
      rendimento: parseFloat(form.get("rendimento") as string),
      dataCriacao: parseISO(form.get("dataCriacao") as string),
      vencimento: parseISO(form.get("vencimento") as string),
      liquidez: form.get("liquidez") as string,
      instituition: form.get("instituition") as string,
      stats: true,
      tipo: form.get("tipo") as string,
      carencia: parseISO(form.get("carencia") as string),
      description: form.get("description") as string,
      indexado: form.get("indexado") as string,
      finalInvestimento: parseFloat(form.get("finalInvestimento") as string),
    };
    await myAxios.post(`/revenues/`, revenue);
    await new Promise((resolve) => setTimeout(resolve, 250));
    revalidatePath("/bag");
    return {
      isValid: true,
      message: "Receita registrada com sucesso!",
      error: { message: "", status: null },
    };
  } catch (err) {
    prevSate.isValid = false;
    prevSate.message = "";
    prevSate.error.message = `Erro ao registrar receita`;
    return prevSate;
  }
};
