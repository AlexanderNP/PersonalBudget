import { Button as AntButton } from "antd";
import { ReactNode } from "react";
import styles from "@/components/Button/Button.module.css";

interface IButtonProps {
  children: ReactNode;
  callback?: () => void;
  style?: object;
}

export const Button = ({ children, callback, style }: IButtonProps) => (
  <AntButton
    type='primary'
    onClick={callback}
    className={styles.button}
    style={style}
  >
    {children}
  </AntButton>
);
