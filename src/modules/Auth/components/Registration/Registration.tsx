import { Form, Input, Button, Flex } from "antd";
import { UserOutlined, LockOutlined, UserAddOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import styles from "@/modules/Auth/components/Registration/Registration.module.css";
import { useAuthStore } from "@/store/storeAuth";
import { useState } from "react";
interface IRegistrationProps {
  callback: (select: "login") => void;
}

export const Registration = ({ callback }: IRegistrationProps) => {
  const [form] = Form.useForm();
  const { registration } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { fullName: string; email: string; password: string }) => {
    try {
      setLoading(true);
      await registration(values);
      callback("login");
      form.resetFields();
    } catch (e: unknown) {
      if (typeof e === "string") {
        form.setFields([
          {
            name: "fullName",
            errors: [e],
          },
          {
            name: "email",
            errors: [e],
          },
        ]);
      } else {
        throw new Error();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name='registration'
      onFinish={onFinish}
      className={styles.form}
      form={form}
      size='large'
    >
      <h1>Зарегистрируйтесь</h1>
      <Form.Item
        name='fullName'
        rules={[{ required: true, message: "Введите полное имя!" }]}
      >
        <Input
          prefix={<UserAddOutlined />}
          placeholder='Введите полное имя'
        />
      </Form.Item>
      <Form.Item
        name='email'
        rules={[{ required: true, message: "Введите email!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          type='email'
          placeholder='Email'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: "Введите пароль!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type='password'
          placeholder='Пароль'
        />
      </Form.Item>
      <Form.Item className={styles.formItem}>
        <Flex
          vertical
          gap={20}
        >
          <Button
            type='primary'
            htmlType='submit'
          >
            {loading ? <span className={styles.loader}></span> : "Зарегистрироваться"}
          </Button>
          <div
            onClick={() => callback("login")}
            className={styles.formLink}
          >
            <ArrowLeftOutlined />
            <span>Вход</span>
          </div>
        </Flex>
      </Form.Item>
    </Form>
  );
};
