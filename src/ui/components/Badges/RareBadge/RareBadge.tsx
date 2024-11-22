import type { ReactNode } from "react";
import clsx from "clsx";

import styles from "./RareBadge.module.css";

type RareBadgeVariant = "default" | "rounded";
type AdwardRare =
  | "ordinary"
  | "rare"
  | "average"
  | "epic"
  | "legendary"
  | "common";
interface RareBadgeProps {
  type?: AdwardRare;
  className?: string;
  variant?: RareBadgeVariant;
  text?: string;
  icon?: ReactNode;
}

export const RareBadge = ({
  type = "common",
  variant = "default",
  className,
  text,
  icon,
}: RareBadgeProps) => {
  const classes = clsx(styles.badge, styles[type], styles[variant], className, {
    [styles.icon]: icon,
  });
  return (
    <div className={classes}>
      {text && text}
      {icon && <span>{icon}</span>}
    </div>
  );
};
