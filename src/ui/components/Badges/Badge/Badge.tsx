import clsx from "clsx";

import styles from "./Badge.module.css";

type BadgeVariant = "dungeon" | "rare";

interface BadgeProps {
  text: string;
  variant: BadgeVariant;
  className?: string;
}

export const Badge = ({ text, variant, className }: BadgeProps) => {
  return (
    <span className={clsx(styles.badge, styles[variant], className)}>
      {text}
    </span>
  );
};
