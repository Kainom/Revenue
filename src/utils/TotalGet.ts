import { ExpenseTotalMonth } from "@/types/Expense";
import { getMonthNumber } from "./MapMonth";



// isn't possible return the undefined,because the app is already checked if the month is valid
export const getTotalExpenseByMonth = (
  expenses: ExpenseTotalMonth[],
  dateFormatYearAndMonth: string
): ExpenseTotalMonth => {
  return (
    expenses.find((expense) => expense.id === dateFormatYearAndMonth) || {
      id: dateFormatYearAndMonth,
      total: 0,
    }
  );
};