import { Header as AntHeader } from "antd/es/layout/layout";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import { ActionsBudget } from "@/modules/ActionsBudget/ActionsBudget";
import styles from "@/components/Header/Header.module.css";

interface IHeaderProps {
  totalBudget: number | string;
  userName: string;
  callback: () => void;
}

export const Header = ({ totalBudget, userName, callback }: IHeaderProps) => (
  <AntHeader className={styles.header}>
    <Flex
      justify='space-between'
      align='center'
    >
      <h1>Общее состояние: {totalBudget}</h1>
      <ActionsBudget />
      <Flex
        justify='space-between'
        align='center'
        gap={20}
      >
        <Avatar
          className={styles.avatar}
          icon={<UserOutlined />}
        />
        <p>{userName}</p>
        <div onClick={callback}>
          <LogoutOutlined className={styles.logout} />
        </div>
      </Flex>
    </Flex>
  </AntHeader>
);
