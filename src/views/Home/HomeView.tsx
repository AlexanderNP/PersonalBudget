import { Header } from "@/components/Header";
import { Budget } from "@/modules/Budget";
import { ExpensesWrap } from "@/modules/Expenses";
import { useBudgetStore } from "@/store/storeBudget";
import { useCurrencyStore } from "@/store/storeCurrency";
import { getCurrencyFormat } from "@/utils/getCurrencyFormat";
import { Flex, Layout } from "antd";
import styles from "@/views/Home/HomeView.module.css";
import { useAuthStore } from "@/store/storeAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Currency } from "@/modules/Currency";
const { Content } = Layout;

export const HomeView = () => {
  const { getTotalBudget, clearBudgetStore } = useBudgetStore();
  const { selectedRates } = useCurrencyStore();
  const { logout, fullName, isAuth, checkAuth } = useAuthStore();
  const totalBudgetFormat = getCurrencyFormat(selectedRates.nameCurrency, getTotalBudget());
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearBudgetStore();
    navigate("/auth");
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isAuth) return null;

  return (
    <Layout data-testid='home-page'>
      <Header
        totalBudget={totalBudgetFormat}
        userName={fullName}
        callback={handleLogout}
      />
      <Content>
        <Flex
          className={styles.homeContainer}
          align='center'
          gap={50}
          vertical
        >
          <Budget />
          <ExpensesWrap />
        </Flex>
        <Currency />
      </Content>
    </Layout>
  );
};
