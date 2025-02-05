import { getSeletOptions } from "@/modules/Currency/helpers/getSelectOptions";
import { describe, test, expect } from "vitest";

describe("getSelectOptions", () => {
  const mockCurrencies = {
    USD: 1,
    RUB: 1.38,
    GBP: 0.87,
  };

  const mockReturnValue = [
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "RUB",
      label: "RUB",
    },
    {
      value: "GBP",
      label: "GBP",
    },
  ];

  test("Валидный результат выполнения функции", () => {
    const result = getSeletOptions(mockCurrencies);
    expect(result).toEqual(mockReturnValue);
  });
});
