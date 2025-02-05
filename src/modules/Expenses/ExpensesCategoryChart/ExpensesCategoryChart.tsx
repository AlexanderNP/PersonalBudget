import { chartOptions } from "@/modules/Expenses/ExpensesCategoryChart/constants";
import { getChartData } from "@/modules/Expenses/ExpensesCategoryChart/helpers";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
import { useBudgetStore } from "../../../store/storeBudget";

Chart.register(ArcElement, Legend, Tooltip);

export const ExpensesCategoryChart = () => {
  const { expenses } = useBudgetStore();

  return (
    <div>
      <Pie
        data={getChartData(expenses)}
        options={chartOptions}
        width={510}
      />
    </div>
  );
};
