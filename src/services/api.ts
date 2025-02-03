import { Revenue } from "@/types/Revenue";
import myAxios from "@/utils/axios";
import slugify from "slugify";

export const getRevenues = async (): Promise<Revenue[]> => {
  try {
    const response = await myAxios.get<Revenue[]>("/revenues/");
    response.data.map((e) => {
        e.vencimento = new Date(e.vencimento);
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching revenues", err);
    throw err;
  }
};

export const getRevenue = async (slug: string): Promise<Revenue | null> => {
  try {
    const response = await myAxios.get<Revenue>(`/revenues/slug/${slug}`);
    response.data.vencimento = new Date(response.data.vencimento);
    return response.data;
  } catch (err) {
    return null;
  }
  
}
    