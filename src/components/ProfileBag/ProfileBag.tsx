import { Typography } from "@/src/ui/components";
import { BagSvg } from "@/src/ui/icons";

import { ItemCard } from "../ItemCard/ItemCard";

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
          <ItemCard key={id} />
        ))}
      </ul>
    </div>
  );
};
