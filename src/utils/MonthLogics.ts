import { ExpenseTotalMonth, Gasto } from "@/types/Expense";

const monthNames = [
  "Jan", "Fev", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Set", "Oct", "Nov", "Dez"
];

export const ordene = (expenses: ExpenseTotalMonth[]): Gasto[] => {
  // Cria um mapa de mês (número) -> total
  const expenseMap = new Map<number, number>();
  expenses.forEach(expense => {
    // Assumindo que expense.id é algo como "2026-01", "2026-02", etc.
    const monthNumber = parseInt(expense.id.split('-')[1]) - 1; // 0-indexed
    expenseMap.set(monthNumber, expense.total);
  });

  // Gera o array completo de 12 meses
  return monthNames.map((monthName, index) => ({
    mes: monthName,
    total: expenseMap.get(index) || 0
  }));
};