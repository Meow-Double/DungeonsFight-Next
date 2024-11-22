import { RareBadge } from "@/src/ui/components";

import styles from "./ItemCard.module.css";

export const ItemCard = () => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <RareBadge type="average" variant="rounded" />
        <span className={styles.text}>1</span>
      </div>
      <img className={styles.image} src="/image.png" alt="" />
    </li>
  );
};
