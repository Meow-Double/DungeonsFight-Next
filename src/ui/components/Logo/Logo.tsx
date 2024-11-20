import type { ComponentProps } from "react";
import Link from "next/link";
import clsx from "clsx";

import { ROUTES } from "@/src/utils";

import styles from "./Logo.module.css";

type LogoProps = ComponentProps<"a">;

export const Logo = ({ href, className, ...props }: LogoProps) => {
  return (
    <Link
      href={href ?? ROUTES.MAIN}
      className={clsx(styles.logo, className)}
      {...props}
    >
      <span>Dungeons</span>
      <span className={styles.accent_text}>Fight</span>
    </Link>
  );
};
