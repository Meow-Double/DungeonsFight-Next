import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

import { ROUTES } from "@/src/utils/constants";

import { ArrowSvg } from "../../icons";

import styles from "./Baner.module.css";

interface BanerProps {
  children: ReactNode;
  banerImage: string;
  className?: string;
  classNameImg?: string;
}

export const Baner = ({
  children,
  banerImage,
  className,
  classNameImg,
}: BanerProps) => {
  return (
    <div className={clsx(styles.baner, className)}>
      <Link className={styles.back} href={ROUTES.MAIN}>
        <ArrowSvg className={styles.arrow} />
        <span>Главная</span>
      </Link>
      <img
        className={clsx(styles.background, classNameImg)}
        src={banerImage}
        alt="background baner"
      />
      {children}
    </div>
  );
};
