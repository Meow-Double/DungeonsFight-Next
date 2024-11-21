import clsx from "clsx";

import styles from "./RareBadge.module.css";

interface RareBadgeProps {
  type: AdwardRare;
  className?: string;
}

export const RareBadge = ({ type, className }: RareBadgeProps) => {
  return <span className={clsx(styles.badge, styles[type], className)} />;
};
