import { Expense } from "@/types/Expense";
import { expenses } from "../expenses";

export function getExpenseMonth(): string[] {
  return expenses.reduce<string[]>((month, data) => {
    const monthString = data.data.toLocaleString("en", { month: "long" });
    if (!month.includes(monthString)) {
      month.push(monthString);
    }
    return month;
  }, []);
}

export function getExpenseByMonth(month: string): Expense[] {
  return expenses.filter(
    (expense) =>
      expense.data.toLocaleString("en", { month: "long" }) === month
  );
}

export function getThreeMonthMostExpense(): Expense[] {
  return expenses.sort(
    (a, b) =>
      getExpenseByMonth(b.data.toLocaleString("en", { month: "long" })).length -
      getExpenseByMonth(a.data.toLocaleString("en", { month: "long" })).length
  )
}

export function getTotalByMonth(month: string): number {
  return getExpenseByMonth(month).reduce(
    (sum, expense) => sum + expense.valor,
    0
  );
}
