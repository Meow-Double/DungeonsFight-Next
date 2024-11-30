import { RareBadge } from "@/src/ui/components";

import styles from "./ItemCard.module.css";

interface ItemCardProps {
  quantity: number;
  image: string;
  type: string | null;
}

export const ItemCard = ({ quantity, image, type }: ItemCardProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        {type && <RareBadge type={type} variant="rounded" />}
        <span className={styles.text}>{quantity}</span>
      </div>
      <img className={styles.image} src={image} alt="icon thing" />
    </li>
  );
};
