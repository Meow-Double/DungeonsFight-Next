import { Button, RareBadge, Typography } from "@/src/ui/components";
import { MoneySvg } from "@/src/ui/icons";

import styles from "./SalesMenu.module.css";

export const SalesMenu = () => {
  return (
    <div className={styles.board}>
      <div className={styles.item}>
        <span className={styles.text}>10</span>
        <img src="/image.png" alt="" />
      </div>
      <div>
        <Typography variant="title20_bold" className={styles.title}>
          Книга культа
        </Typography>
        <RareBadge text="epic" type="epic" className={styles.type} />
        <Typography variant="text16_regular" className={styles.payment}>
          <span>Стоимость: {16}</span>
          <MoneySvg className={styles.icon} />
        </Typography>
        <div className={styles.count_input}>
          <button className={styles.btn}>-</button>
          <span className={styles.count_text}>1</span>
          <button className={styles.btn}>+</button>
        </div>
        <Button variant="accent">Продать</Button>
      </div>
    </div>
  );
};
