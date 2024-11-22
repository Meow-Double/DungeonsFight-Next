import Link from "next/link";

import { Typography } from "@/src/ui/components";
import { ArrowSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils";

import styles from "./ShopBaner.module.css";

export const ShopBaner = () => {
  return (
    <div className={styles.baner}>
      <Link className={styles.back} href={ROUTES.MAIN}>
        <ArrowSvg className={styles.arrow} />
        <span>Главная</span>
      </Link>
      <img
        className={styles.background}
        src="https://images7.alphacoders.com/640/640387.jpg"
        alt=""
      />
      <Typography className={styles.title} variant="title20_bold">
        Shop
      </Typography>
    </div>
  );
};
