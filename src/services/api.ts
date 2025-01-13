import { Revenue } from "@/types/Revenue";
import myAxios from "@/utils/axios";

export const getRevenues = async (): Promise<Revenue[]> => {
  try {
    const response = await myAxios.get<Revenue[]>("/");
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
    