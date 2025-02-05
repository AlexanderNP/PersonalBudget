import type { ChartOptions } from "chart.js";

export const chartOptions: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        font: {
          size: 20,
        },
        padding: 20,
      },
    },
  },
};
