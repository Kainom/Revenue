import { Expense } from "@/types/Expense";
import { expenses } from "../expenses";

export function getExpenseMonth(): string[] {
  return expenses.reduce<string[]>((month, data) => {
    const monthString = data.data.toLocaleString("pt-BR", { month: "long" });
    if (!month.includes(monthString)) {
      month.push(monthString);
    }
    return month;
  }, []);
}

export function getExpenseByMonth(month: string): Expense[] {
  return expenses.filter(
    (expense) =>
      expense.data.toLocaleString("pt-BR", { month: "long" }) === month
  );
}

export function getThreeMostExpense(): Expense[] {
  return expenses.sort((a, b) => b.valor - a.valor).slice(0, 3);
}

export function getTotalByMonth(month: string): number {
  return getExpenseByMonth(month).reduce(
    (sum, expense) => sum + expense.valor,
    0
  );
}
