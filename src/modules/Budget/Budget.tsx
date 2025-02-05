import { Flex } from "antd";
import { useBudgetStore } from "@/store/storeBudget";
import { useCurrencyStore } from "@/store/storeCurrency";
import { getCurrencyFormat } from "@/utils/getCurrencyFormat";
import { BudgetContainer } from "@/modules/Budget/components/BudgetContainer";
import { BudgetType } from "@/modules/Budget/constants";

export const Budget = () => {
  const { getTotalExpenses, getTotalIncome } = useBudgetStore();
  const { selectedRates } = useCurrencyStore();

  return (
    <Flex gap={30}>
      <BudgetContainer
        type={BudgetType.Expenses}
        value={getCurrencyFormat(selectedRates.nameCurrency, getTotalExpenses())}
      />
      <BudgetContainer
        type={BudgetType.Income}
        value={getCurrencyFormat(selectedRates.nameCurrency, getTotalIncome())}
      />
    </Flex>
  );
};
