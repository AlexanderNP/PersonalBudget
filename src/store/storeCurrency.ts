import { hookstate, useHookstate } from "@hookstate/core";
import { CurrencyService } from "@/api/services/currencyService";

interface ICurrencyStore {
  base: "RUB";
  rates: Record<string, number>;
  selectedRates: { nameCurrency: string; valueCurrency: number };
}

const initial = hookstate<ICurrencyStore>({
  base: "RUB",
  rates: {},
  selectedRates: {
    nameCurrency: "RUB",
    valueCurrency: 1,
  },
});

export const useCurrencyStore = () => {
  const state = useHookstate(initial);

  const getСurrencies = async () => {
    const { rates } = await CurrencyService.getCurrency();
    state.rates.merge(rates);
  };

  const setSelectCurrency = (currency: string | undefined) => {
    const { nameCurrency, valueCurrency } = state.selectedRates;
    if (currency === undefined) {
      nameCurrency.set("RUB");
      valueCurrency.set(1);
      return;
    }
    nameCurrency.set(currency);
    valueCurrency.set(state.rates.get()[currency]);
  };

  return {
    base: state.base.get(),
    currencies: state.rates.get(),
    selectedRates: state.selectedRates.get(),
    getСurrencies,
    setSelectCurrency,
  };
};
