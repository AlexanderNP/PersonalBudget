import { $authHost } from "@/api/auth";
import { getUrl } from "@/api/utils/getUrl";
import { ICurrencyResponse } from "@/api/types";
import { handleError } from "@/api/utils/handleError";
export class CurrencyService {
  static async getCurrency(): Promise<ICurrencyResponse> {
    try {
      const { data } = await $authHost.get<Promise<ICurrencyResponse>[]>(getUrl("/currency-rate"));
      return data[0];
    } catch (e: unknown) {
      const message = handleError(e);
      throw message;
    }
  }
}
