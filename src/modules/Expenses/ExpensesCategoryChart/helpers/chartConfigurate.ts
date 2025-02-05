import { getCategories } from "@/modules/Expenses/constant";
import { IExpensesCategory } from "@/type";

export const getChartData = (expenses: IExpensesCategory) => ({
  labels: getCategories(expenses).map(({ name }) => name),
  datasets: [
    {
      data: getCategories(expenses).map(({ value }) => value),
      backgroundColor: getCategories(expenses).map(({ color }) => color),
    },
  ],
});
