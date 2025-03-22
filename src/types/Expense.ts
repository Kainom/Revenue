import { Parcela } from "./Parcela";


export interface Expense {
  id?: string;
  nome: string;
  value: number;
  category: string;
  paymentDay: Date;
  description: string;
  grove: string;
  slug: string;
  parcela?: Parcela | null;
}

export interface ExpenseTotalMonth {
  id: string;
  total: number;
}

export type Gasto = { mes: string; total: number };
