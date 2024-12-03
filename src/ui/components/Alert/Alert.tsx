"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";



import styles from "./Alert.module.css";
import { ClientPortal } from "../ClientProtal/ClientProtal";

type AlertVariants = "default";
type AlertTypes = "error" | "normal";

interface AlertProps {
  children: ReactNode;
  isOpen: boolean;
  timeClose?: number;
  variant: AlertVariants;
  className?: string;
  type?: AlertTypes;
}

export const Alert = ({
  children,
  isOpen: defaultState,
  variant = "default",
  timeClose = 1000,
  className,
  type = "normal",
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultState) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, timeClose);
      return () => clearTimeout(timer);
    }
  }, [defaultState]);

  return (
    isOpen && (
      <ClientPortal selector="#modal">
        <div
          className={clsx(
            styles.alert,
            styles[variant],
            styles[type],
            className
          )}
        >
          {children}
        </div>
      </ClientPortal>
    )
  );
};
