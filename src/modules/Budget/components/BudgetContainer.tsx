import { Flex } from "antd";
import styles from "@/modules/Budget/components/BudgetContainer.module.css";
import { BudgetType } from "@/modules/Budget/constants";

interface IBudgetContainerProps {
  type: BudgetType;
  value: string;
}

export const BudgetContainer = ({ type, value }: IBudgetContainerProps) => {
  const title = type === BudgetType.Expenses ? "Расходы: " : "Доходы: ";
  const classType = type === BudgetType.Expenses ? styles.expenses : styles.income;

  return (
    <Flex className={styles.container}>
      <p>{title}</p>
      <span className={classType}>{value}</span>
    </Flex>
  );
};
