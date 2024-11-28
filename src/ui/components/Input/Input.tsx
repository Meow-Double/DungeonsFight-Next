import type { ComponentProps } from "react";
import { forwardRef, useId } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

type InputVariant = "primary";

type InputProps<
  Component extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = "input"
> = {
  label?: string;
  error?: string;
  variant: InputVariant;
  component: Component;
} & ComponentProps<Component>;

const InputBase = forwardRef<HTMLInputElement, InputProps<"input">>(
  (
    {
      variant,
      component,
      label,
      className,
      error,
      id: externalId,
      ...props
    }: InputProps<"input">,
    ref
  ) => {
    const internalId = useId();
    const id = externalId ?? internalId;
    const Component = component || "input";
    return (
      <div className={clsx({ [styles.error]: !!error }, styles.container)}>
        {label && (
          <label htmlFor={id} className={styles.label_text}>
            {label}
          </label>
        )}
        <Component
          className={clsx(styles.input, styles[variant], className)}
          {...props}
          id={id}
          ref={ref}
        />
        {error && <p className={styles.error_text}>{error}</p>}
      </div>
    );
  }
);

InputBase.displayName = "Input";

export const Input = InputBase;
