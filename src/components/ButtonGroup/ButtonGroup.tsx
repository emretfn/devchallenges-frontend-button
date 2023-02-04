import classNames from "classnames";
import React from "react";
import Button from "../Button/Button";
import styles from "./ButtonGroup.module.scss";

interface IProps {
  text?: string;
  hover?: boolean;
  children: React.ReactNode;
}

const ButtonGroup = ({ text, hover = false, children }: IProps) => {
  console.log("buttonstyles", styles);

  const classes = {
    [styles["buttonGroup--hover"]]: hover,
  };
  return (
    <div className={classNames(styles.buttonGroup, classes)}>
      {text && <span>{`${text}`}</span>}
      <div className={styles.button}>{children}</div>
    </div>
  );
};

export default ButtonGroup;
