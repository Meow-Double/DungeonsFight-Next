"use client";

import type { ComponentProps, ReactNode } from "react";
import { useId } from "react";
import clsx from "clsx";

import styles from "./Checkbox.module.css";

type CheckboxVariant = "default";

interface CheckboxProps extends ComponentProps<"label"> {
  label?: ReactNode;
  variant?: CheckboxVariant;
}

export const Checkbox = ({
  label,
  className,
  variant = "default",
  ...props
}: CheckboxProps) => {
  const id = useId();

  return (
    <label className={clsx(styles.label, className)} {...props}>
      <input id={id} type="checkbox" className={styles.input} />
      <span className={styles.checkbox} />
      {label && (
        <span className={clsx(styles.text, styles[variant])}>{label}</span>
      )}
    </label>
  );
};
