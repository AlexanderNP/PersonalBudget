import { CurrencyService } from "@/api/services/currencyService";
import { $authHost } from "@/api/auth";
import { handleError } from "@/api/utils/handleError";
import { getUrl } from "@/api/utils/getUrl";
import { describe, test, expect, vi, beforeAll, Mock } from "vitest";
import { ICurrencyResponse } from "@/api/types";

vi.mock("@/api/auth", () => ({
  $authHost: {
    get: vi.fn(),
  },
}));

vi.mock("@/api/utils/handleError", () => ({
  handleError: vi.fn(),
}));

vi.mock("@/api/utils/getUrl", () => ({
  getUrl: vi.fn((url: string) => url),
}));

describe("Сервис по получению курса валюты", () => {
  let mockResponse: ICurrencyResponse;
  beforeAll(() => {
    mockResponse = {
      base: "RUB",
      rates: {
        AUD: 0.01547537,
        AZN: 0.0176317,
      },
    };
  });

  test("Получение валюты без ошибки", async () => {
    ($authHost.get as Mock).mockResolvedValueOnce({ data: [mockResponse] });

    const result = await CurrencyService.getCurrency();

    expect(getUrl).toHaveBeenCalledWith("/currency-rate");
    expect($authHost.get).toHaveBeenCalledWith("/currency-rate");
    expect(result).toEqual(mockResponse);
  });

  test("Получение валюты с ошибкой", async () => {
    const mockError = new Error();
    ($authHost.get as Mock).mockRejectedValueOnce(mockError);
    (handleError as Mock).mockReturnValueOnce("Handled error");

    await expect(CurrencyService.getCurrency()).rejects.toEqual("Handled error");

    expect(getUrl).toHaveBeenCalledWith("/currency-rate");
    expect($authHost.get).toHaveBeenCalledWith("/currency-rate");
    expect(handleError).toHaveBeenCalledWith(mockError);
  });
});
