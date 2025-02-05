import { Form, InputNumber, Button, Flex } from "antd";
import { useBudgetStore } from "@/store/storeBudget";
import { useCurrencyStore } from "@/store/storeCurrency";
import { getCurrencyFormat } from "@/utils/getCurrencyFormat";
import styles from "@/modules/ActionsBudget/components/FormActionIncome/FormActionIncome.module.css";
import { validateRules, validateMessages } from "@/modules/ActionsBudget/constants";

export const FormActionIncome = () => {
  const [form] = Form.useForm();
  const { getTotalIncome, addIncome } = useBudgetStore();
  const { base } = useCurrencyStore();

  const onFinish = (values: { income: number }) => {
    addIncome(values.income);
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
      <h1 className={styles.title}>Ваши доходы: {getCurrencyFormat(base, getTotalIncome())}</h1>
      <Form.Item
        name='income'
        label='Доходы'
        className={styles.label}
        rules={[{ required: true, ...validateRules }]}
        initialValue={0}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
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
