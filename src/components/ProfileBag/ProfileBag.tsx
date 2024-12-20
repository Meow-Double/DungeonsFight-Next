import { Typography } from "@/src/ui/components";
import { BagSvg } from "@/src/ui/icons";

import { ItemCard } from "../ItemCard/ItemCard";

import styles from "./ProfileBag.module.css";

interface ProfileBagProps {
  bag: BagItems;
}

export const ProfileBag = ({ bag }: ProfileBagProps) => {
  return (
    <div className={styles.bag}>
      <div className={styles.title}>
        <BagSvg />
        <Typography tag="h2" variant="title20_bold">
          Рюкзак: {!Boolean(bag.length) && "Пустой"}
        </Typography>
      </div>
      {Boolean(bag.length) && (
        <ul className={styles.items}>
          {bag.map((bagItem) => (
            <ItemCard isInfo key={bagItem.id} {...bagItem} />
          ))}
        </ul>
      )}
    </div>
  );
};
