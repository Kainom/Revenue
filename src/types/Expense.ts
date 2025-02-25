export interface Expense {
  id?: string;
  nome: string;
  value: number;
  category: string;
  dataCriacao: Date | string;
  description: string;
  slug: string;
}

export interface ExpenseTotalMonth{
  id:string;
  total:number;
}

export type Gasto = { mes: string; total: number };
