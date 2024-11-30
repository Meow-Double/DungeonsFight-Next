"use client";
import type { ReactNode } from "react";
import clsx from "clsx";

import { CloseSvg } from "../../icons";

import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  title?: string | null;
  onClick: () => void;
  isOpen?: boolean;
  className?: string;
}

export const Modal = ({
  children,
  title,
  onClick,
  className,
  isOpen = true,
}: ModalProps) => {
  return (
    isOpen && (
      <div className={clsx(styles.overlay, className)} onClick={onClick}>
        <div className={styles.body} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <button onClick={onClick} className={styles.close_btn}>
              <CloseSvg />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};
