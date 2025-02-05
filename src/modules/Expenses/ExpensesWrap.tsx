import { ExpensesCategoryChart } from "@/modules/Expenses/ExpensesCategoryChart";
import { ExpensesCategoryList } from "@/modules/Expenses/ExpensesCategoryList";
import { Flex } from "antd";
import styles from "@/modules/Expenses/ExpensesWrap.module.css";
import { useBudgetStore } from "@/store/storeBudget";

export const ExpensesWrap = () => {
  const { getTotalExpenses } = useBudgetStore();
  return (
    <div className={styles.wrap}>
      <h1>Категории расходов</h1>
      {getTotalExpenses() ? (
        <Flex
          align='center'
          gap={50}
        >
          <ExpensesCategoryList />
          <ExpensesCategoryChart />
        </Flex>
      ) : (
        <Flex
          align='center'
          justify='center'
        >
          <p>Расходов пока нет</p>
        </Flex>
      )}
    </div>
  );
};
