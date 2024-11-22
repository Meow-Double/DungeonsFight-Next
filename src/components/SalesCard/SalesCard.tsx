import { RareBadge, Typography } from "@/src/ui/components";
import { MoneySvg } from "@/src/ui/icons";

import styles from "./SalesCard.module.css";

export const SalesCard = () => {
  return (
    <button className={styles.card}>
      <div className={styles.image_block}>
        <RareBadge variant="rounded" type="average" className={styles.rare} />
        <img className={styles.image} src="/image.png" alt="" />
      </div>
      <div className={styles.content}>
        <Typography variant="title20_bold" className={styles.title}>
          Книнга культа
        </Typography>
        <Typography variant="text16_regular" className={styles.payment}>
          <span>Стоимость: {11}</span>
          <MoneySvg className={styles.icon} />
        </Typography>
      </div>
    </button>
  );
};
