import type { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Container.module.css";

type variant = "default" | "footer";

interface ContainerProps {
  children: ReactNode;
  variant?: variant;
  className?: string;
}

export const Container = ({
  children,
  variant = "default",
  className,
}: ContainerProps) => {
  return (
    <div className={clsx(styles.container, styles[variant], className)}>
      {children}
    </div>
  );
};
