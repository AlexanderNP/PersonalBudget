import { hookstate, useHookstate } from "@hookstate/core";
import type { IExpensesCategory } from "@/type";
import { localStorageRead, localStorageRemove, localStorageWrite } from "@/utils/localStorage";
import { useCurrencyStore } from "@/store/storeCurrency";
import { cloneDeep } from "@/utils/cloneDeep";

interface IBudgetStore {
  expenses: IExpensesCategory;
  income: number;
}

const getCurrencyConversion = (budgetValue: number, currencyValue: number) =>
  Number((budgetValue * currencyValue).toFixed(2));

const initalBudget: IBudgetStore = {
  expenses: {
    clothes: 0,
    home: 0,
    health: 0,
    transport: 0,
    divorce: 0,
  },
  income: 0,
};

const loadBudgetFromLocalStorage = (key: string): IBudgetStore => {
  const storedBudgetLS = localStorageRead<IBudgetStore>(key);
  return storedBudgetLS ?? cloneDeep<IBudgetStore>(initalBudget);
};

const initial = hookstate<IBudgetStore>(loadBudgetFromLocalStorage("budget"));

export const useBudgetStore = () => {
  const state = useHookstate(initial);
  const { selectedRates } = useCurrencyStore();

  const getTotalExpenses = (): number => {
    const totalExpenses = Object.values(state.expenses).reduce((acc, item) => acc + item.get(), 0);
    return getCurrencyConversion(totalExpenses, selectedRates.valueCurrency);
  };

  const getTotalIncome = (): number => {
    const totalIncome = state.income.get();
    return getCurrencyConversion(totalIncome, selectedRates.valueCurrency);
  };

  const getTotalBudget = (): number => getTotalIncome() - getTotalExpenses();

  const addExpenses = (expensesToAdd: IExpensesCategory) => {
    Object.entries(expensesToAdd).forEach(([key, value]) => {
      state.expenses[key as keyof typeof state.expenses].set((prev: number) => prev + value);
    });
    saveBudgetToLocalStorage();
  };

  const addIncome = (incomeToAdd: number) => {
    state.income.set((p) => p + incomeToAdd);
    saveBudgetToLocalStorage();
  };

  const clearBudgetStore = () => {
    state.set(cloneDeep<IBudgetStore>(initalBudget));
    localStorageRemove("budget");
  };

  const saveBudgetToLocalStorage = () => {
    const budget = {
      expenses: {
        clothes: state.expenses.clothes.get(),
        home: state.expenses.home.get(),
        health: state.expenses.health.get(),
        transport: state.expenses.transport.get(),
        divorce: state.expenses.divorce.get(),
      },
      income: state.income.get(),
    };
    localStorageWrite<IBudgetStore>("budget", budget);
  };

  return {
    budget: state,
    expenses: {
      clothes: getCurrencyConversion(state.expenses.clothes.get(), selectedRates.valueCurrency),
      home: getCurrencyConversion(state.expenses.home.get(), selectedRates.valueCurrency),
      health: getCurrencyConversion(state.expenses.health.get(), selectedRates.valueCurrency),
      transport: getCurrencyConversion(state.expenses.transport.get(), selectedRates.valueCurrency),
      divorce: getCurrencyConversion(state.expenses.divorce.get(), selectedRates.valueCurrency),
    },
    income: state.income.get(),
    getTotalExpenses,
    getTotalIncome,
    getTotalBudget,
    addExpenses,
    addIncome,
    saveBudgetToLocalStorage,
    clearBudgetStore,
  };
};
