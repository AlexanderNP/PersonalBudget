import { Form, InputNumber, Button, Flex } from "antd";
import { useBudgetStore } from "@/store/storeBudget";
import { useCurrencyStore } from "@/store/storeCurrency";
import { getCurrencyFormat } from "@/utils/getCurrencyFormat";
import styles from "@/modules/ActionsBudget/components/FormActionExpenses/FormActionExpenses.module.css";
import { validateMessages, validateRules } from "@/modules/ActionsBudget/constants";
import { IExpensesCategory } from "@/type";
import { categories } from "@/constants";

export const FormActionExpenses = () => {
  const [form] = Form.useForm();
  const { addExpenses, getTotalExpenses } = useBudgetStore();
  const { base } = useCurrencyStore();

  const onFinish = (values: IExpensesCategory) => {
    addExpenses(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      size='large'
      className={styles.form}
      validateMessages={validateMessages}
    >
      <h1 className={styles.title}>Ваши расходы: {getCurrencyFormat(base, getTotalExpenses())}</h1>
      {Object.entries(categories).map(([key, value]) => (
        <Form.Item
          key={key}
          label={value}
          name={key}
          rules={[{ ...validateRules }]}
          initialValue={0}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      ))}
      <Form.Item>
        <Flex justify='flex-end'>
          <Button
            type='primary'
            htmlType='submit'
          >
            Добавить
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};
