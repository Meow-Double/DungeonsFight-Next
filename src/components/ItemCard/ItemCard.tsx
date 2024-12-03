import { RareBadge } from "@/src/ui/components";
import { MouseMenu } from "@/src/ui/components";

import { InfoWindow } from "./components";

import styles from "./ItemCard.module.css";

interface ItemCardProps {
  quantity: number;
  image: string;
  type?: string | null;
  desc?: string;
  payment?: number;
  title?: string;
  isInfo: boolean;
}

export const ItemCard = ({
  quantity,
  image,
  type,
  desc,
  payment,
  title,
  isInfo,
}: ItemCardProps) => {
  return isInfo ? (
    <li className={styles.item}>
      <MouseMenu
        visibleMenu={
          <InfoWindow
            desc={desc ?? ""}
            payment={payment ?? 0}
            type={type ?? ""}
            title={title ?? ""}
          />
        }
      >
        <div className={styles.info}>
          {type && <RareBadge type={type} variant="rounded" />}
          <span className={styles.text}>{quantity}</span>
        </div>
        <img className={styles.image} src={image} alt="icon thing" />
      </MouseMenu>
    </li>
  ) : (
    <li className={styles.item}>
      <div className={styles.info}>
        {type && <RareBadge type={type} variant="rounded" />}
        <span className={styles.text}>{quantity}</span>
      </div>
      <img className={styles.image} src={image} alt="icon thing" />
    </li>
  );
};
