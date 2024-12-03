"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import clsx from "clsx";

import styles from "./MouseMenu.module.css";

interface MouseMenuProps {
  children: ReactNode;
  visibleMenu: ReactNode;
}

export const MouseMenu = ({ children, visibleMenu }: MouseMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [centerPositionX, setCenterPositionX] = useState(0);
  const [mousePositionX, setMousePositionX] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMousePositionX(event.clientX);
  };

  useEffect(() => {
    if (isHovered && ref.current) {
      const rect = ref?.current.getBoundingClientRect();
      const startX = rect.left;
      const finishX = rect.right;
      const center = (finishX - startX) / 2 + startX - 10;
      setCenterPositionX(center);
    }
  }, [ref, isHovered]);

  return (
    <div className={styles.wrapper}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={ref}
      >
        {children}
      </div>
      {isHovered && (
        <div
          className={clsx(styles.modal, {
            [styles.left]: centerPositionX < mousePositionX,
            [styles.right]: centerPositionX > mousePositionX,
          })}
        >
          {visibleMenu}
        </div>
      )}
    </div>
  );
};
