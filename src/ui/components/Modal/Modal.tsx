"use client";
import type { ReactNode } from "react";
import clsx from "clsx";

import { CloseSvg } from "../../icons";
import { Typography } from "../Typography/Typography";

import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  title?: string;
  onClick: () => void;
  isOpen: boolean;
  className?: string;
}

export const Modal = ({
  children,
  title,
  onClick,
  className,
  isOpen,
}: ModalProps) => {
  return (
    isOpen && (
      <div className={clsx(styles.overlay, className)} onClick={onClick}>
        <div className={styles.body} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            {title && <Typography variant="title20_bold">{title}</Typography>}
            <button onClick={onClick}>
              <CloseSvg />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};
