import type { ComponentPropsWithRef, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

type ButtonVariant = "default";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: ButtonVariant;
  children: ReactNode;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type = "button",
  variant = "default",
  children,
  startIcon,
  endIcon,
  disabled,
  loading,
  className,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    styles.button,
    styles[variant],
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className
  );

  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={classes}
      {...props}
    >
      {!!startIcon && <div className={styles.start_icon}>{startIcon}</div>}
      <span className={clsx(styles.button_text)}>{children}</span>
      {!!endIcon && <div className={styles.end_icon}>{endIcon}</div>}
    </button>
  );
};
