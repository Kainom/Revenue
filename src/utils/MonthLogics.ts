import { ExpenseTotalMonth, Gasto } from "@/types/Expense";

const data: Gasto[] = [
  { mes: "Jan", total: 0 },
  { mes: "Fev", total: 0 },
  { mes: "Mar", total: 0 },
  { mes: "Apr", total: 0 },
  { mes: "May", total: 0 },
  { mes: "Jun", total: 0 },
  { mes: "Jul", total: 0 },
  { mes: "Aug", total: 0 },
  { mes: "Set", total: 0 },
  { mes: "Oct", total: 0 },
  { mes: "Nov", total: 0 },
  { mes: "Dez", total: 0 },
];
export const ordene = (expenses: ExpenseTotalMonth[]): Gasto[] => {
  const expensesOrdenados = expenses.sort((a, b) => a.id.localeCompare(b.id));
  return data.map((expense, index) => ({
    ...expense,
    total: expensesOrdenados[index]?.total || 0,
  }));
};
