export const getCurrencyFormat = (currency = "RUB", value: number | string): string =>
  Intl.NumberFormat("ru-RU", { style: "currency", currency }).format(Number(value));
