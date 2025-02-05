export const getPercent = (value: number, generalState: number) =>
  parseFloat(((value / generalState) * 100).toFixed(2));
