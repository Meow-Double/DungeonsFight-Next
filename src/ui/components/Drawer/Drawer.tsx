import type { ReactNode } from "react";
import clsx from "clsx";

import { CloseSvg } from "../../icons";

import styles from "./Drawer.module.css";

interface DrawerProps {
  children: ReactNode;
  title?: string;
  closeDrawer: () => void;
  className?: string;
}

export const Drawer = ({
  children,
  title,
  closeDrawer,
  className,
}: DrawerProps) => {
  return (
    <div className={clsx(styles.overlay, className)} onClick={closeDrawer}>
      <div className={styles.body} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <button onClick={closeDrawer}>
            <CloseSvg />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
