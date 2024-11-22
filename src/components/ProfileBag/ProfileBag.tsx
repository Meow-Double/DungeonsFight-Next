import { RareBadge, Typography } from "@/src/ui/components";
import { BagSvg } from "@/src/ui/icons";

import styles from "./ProfileBag.module.css";

const Data = [1, 2, 3, 4, 5, 6];

export const ProfileBag = () => {
  return (
    <div className={styles.bag}>
      <div className={styles.title}>
        <BagSvg />
        <Typography variant="title20_bold">Ваш рюкзак:</Typography>
      </div>
      <ul className={styles.items}>
        {Data.map((id) => (
          <li className={styles.item} key={id}>
            <div className={styles.info}>
              <RareBadge type="average" variant="rounded" />
              <span className={styles.text}>1</span>
            </div>
            <img className={styles.image} src="/image.png" alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
