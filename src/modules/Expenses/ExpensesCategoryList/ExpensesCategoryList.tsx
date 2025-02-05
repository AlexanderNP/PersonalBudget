import { Flex, Progress } from "antd";
import { getPercent } from "@/modules/Expenses/ExpensesCategoryList/utils";
import styles from "@/modules/Expenses/ExpensesCategoryList/ExpensesCategoryList.module.css";
import { getCategories } from "@/modules/Expenses/constant";
import { useBudgetStore } from "@/store/storeBudget";

export const ExpensesCategoryList = () => {
  const { expenses, getTotalExpenses } = useBudgetStore();
  const categories = getCategories(expenses);

  return (
    <Flex vertical>
      {categories.map(({ name, value, color }) => (
        <Flex
          gap='small'
          vertical
          className={styles.expensesCategory}
          key={name}
        >
          <p>{name}</p>
          <Progress
            percent={getPercent(value, getTotalExpenses())}
            strokeColor={color}
            size={[500, 20]}
          />
        </Flex>
      ))}
    </Flex>
  );
};
