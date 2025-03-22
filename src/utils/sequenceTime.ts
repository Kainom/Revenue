import {ExpenseTotalMonth } from "@/types/Expense";

// get the expense month named to format YYYY-MM in string
// EXAMPLE: getNamedMonthOfDate("2022-01") => "January"
// It is a specif,you can use it in another function com map to iterate over the list
export const getNamedMonthOfDate = (date: string): string => {
  const [year, month] = date.split("-");
  const dateChanged = new Date(Number(year), Number(month) - 1);
  return dateChanged.toLocaleString("en", { month: "long" });
};

// get the expenses month named to format YYYY-MM in string to each expense
// EXAMPLE: getExpenseMonth(expenses) => ["January", "February", "March"]
export function getExpenseMonth(expenses: ExpenseTotalMonth[]): string[] {
  const months = expenses.map((expense) => {
    return getNamedMonthOfDate(expense.id);
  });
  console.log(months);
  return months;
}



