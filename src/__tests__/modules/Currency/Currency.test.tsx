import { describe, test, expect, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useCurrencyStore } from "@/store/storeCurrency";
import { Currency } from "@/modules/Currency";
import { getSeletOptions } from "@/modules/Currency/helpers/getSelectOptions";
import userEvent from "@testing-library/user-event";

vi.mock("@/store/storeCurrency", () => ({
  useCurrencyStore: vi.fn(() => ({
    currencies: ["USD"],
    getСurrencies: vi.fn(),
    setSelectCurrency: vi.fn(),
    base: "RUB",
  })),
}));

vi.mock("@/modules/Currency/helpers/getSelectOptions", () => ({
  getSeletOptions: vi.fn(),
}));

describe("Компонент Currency (выпадающий список с валютами)", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Рендер компонента Currency", () => {
    render(<Currency />);

    const select = screen.getByTestId("select-currency");
    expect(select).toBeInTheDocument();
    expect(screen.getByText("RUB")).toBeInTheDocument();
  });

  test("Вызова функции getSeletOptions", () => {
    render(<Currency />);

    expect(getSeletOptions).toHaveBeenCalledTimes(1);
  });

  // Ошбика с Antd
  test.skip("Выбор валюты из выпадающего списка", async () => {
    const { setSelectCurrency } = useCurrencyStore();
    render(<Currency />);

    const select = screen.getByTestId("select-currency");
    await userEvent.click(select);

    const option = screen.getByText("USD");
    await userEvent.click(option);

    expect(setSelectCurrency).toHaveBeenCalledWith("USD");
  });
});
