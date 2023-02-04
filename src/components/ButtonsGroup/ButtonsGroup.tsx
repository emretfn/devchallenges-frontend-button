import React, { Children } from "react";
import styles from "./ButtonsGroup.module.scss";

interface IProps {
  children: React.ReactNode;
}
const ButtonsGroup = ({ children }: IProps) => {
  return <div className={styles.buttonsGroup}>{children}</div>;
};

export default ButtonsGroup;
