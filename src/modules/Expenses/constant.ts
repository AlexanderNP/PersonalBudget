import { IExpensesCategory } from "@/type";
import { categories } from "@/constants";

const { clothes, home, health, transport, divorce } = categories;

export const getCategories = (expenses: IExpensesCategory) => [
  {
    name: clothes,
    value: expenses.clothes,
    color: "#FF69B4",
  },
  {
    name: home,
    value: expenses.home,
    color: "#4682B4",
  },
  {
    name: health,
    value: expenses.health,
    color: "#32CD32",
  },
  {
    name: transport,
    value: expenses.transport,
    color: "#FFD700",
  },
  {
    name: divorce,
    value: expenses.divorce,
    color: "#8A2BE2",
  },
];
