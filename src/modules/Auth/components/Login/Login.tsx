import { Form, Input, Button, Flex } from "antd";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from "@/modules/Auth/components/Login/Login.module.css";
import { useAuthStore } from "@/store/storeAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ILoginProps {
  callback: (select: "registration") => void;
}

export const Login = ({ callback }: ILoginProps) => {
  const [form] = Form.useForm();
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      await login(values);
      navigate("/");
    } catch (e: unknown) {
      if (typeof e === "string") {
        form.setFields([
          {
            name: "email",
            errors: [e],
          },
          {
            name: "password",
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
      name='login'
      onFinish={onFinish}
      className={styles.form}
      form={form}
      size='large'
    >
      <h1>Войдите</h1>
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
          placeholder='Password'
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
            {loading ? <span className={styles.loader}></span> : "Войти"}
          </Button>
          <div
            onClick={() => callback("registration")}
            className={styles.formLink}
          >
            <span>Зарегистрироваться</span>
            <ArrowRightOutlined />
          </div>
        </Flex>
      </Form.Item>
    </Form>
  );
};
