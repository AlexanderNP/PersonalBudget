import { Select } from "antd";
import { useCurrencyStore } from "@/store/storeCurrency";
import styles from "@/modules/Currency/Currency.module.css";
import { getSeletOptions } from "@/modules/Currency/helpers/getSelectOptions";
import { useEffect } from "react";

export const Currency = () => {
  const { currencies, setSelectCurrency, base, getСurrencies } = useCurrencyStore();

  const handleChange = (value: string | undefined) => {
    setSelectCurrency(value);
  };

  useEffect(() => {
    getСurrencies();
  }, []);

  return (
    <Select
      options={getSeletOptions(currencies)}
      style={{ width: 220 }}
      allowClear
      onChange={handleChange}
      className={styles.currency}
      placeholder={base}
      data-testid='select-currency'
    />
  );
};
