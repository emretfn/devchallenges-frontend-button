import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "text" | "default";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  [key: string]: any;
}

const Button: FunctionComponent<IProps> = ({
  children,
  variant = "default",
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = "md",
  color = "default",
  ...rest
}) => {
  const classes = {
    [styles["btn--variant-outline"]]: variant === "outline",
    [styles["btn--variant-text"]]: variant === "text",
    [styles["btn--disable-shadow"]]: disableShadow,
    [styles["btn--disabled"]]: disabled,
    [styles["btn--sm"]]: size === "sm",
    [styles["btn--lg"]]: size === "lg",
    [styles["btn--primary"]]: color === "primary",
    [styles["btn--secondary"]]: color === "secondary",
    [styles["btn--danger"]]: color === "danger",
  };

  return (
    <button
      disabled={disabled}
      className={classNames(styles.btn, classes)}
      {...rest}
    >
      {startIcon && (
        <span
          className={classNames("material-icons", styles["material-icons"])}
        >
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span
          className={classNames("material-icons", styles["material-icons"])}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
