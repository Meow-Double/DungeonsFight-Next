import { RareBadge, Typography } from "@/src/ui/components";
import { MoneySvg } from "@/src/ui/icons";

import styles from "./AdwardCard.module.css";

interface AdwardCardProps {
  title: string;
  chance: number;
  payment: number;
  icon: string;
}

export const AdwardCard = ({
  title,
  chance,
  payment,
  icon,
}: AdwardCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_block}>
        {/* <span className={styles.rare} /> */}
        <RareBadge type="average" className={styles.rare} />
        <img className={styles.image} src={icon} alt="" />
      </div>
      <div className={styles.content}>
        <Typography variant="title20_bold" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="text16_regular" className={styles.text}>
          Шанс выпадения: {chance}%
        </Typography>
        <Typography variant="text16_regular">
          Стоимость: {payment} <MoneySvg className={styles.icon} />
        </Typography>
      </div>
    </div>
  );
};
