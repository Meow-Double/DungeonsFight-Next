import { RareBadge, Typography } from "@/src/ui/components";
import { MoneySvg } from "@/src/ui/icons";

import styles from "./AdwardCard.module.css";

interface AdwardCardProps {
  title?: string;
  chance?: number;
  payment?: number;
  image?: string;
  type?: string;
}

export const AdwardCard = ({
  title,
  chance,
  payment,
  image,
  type,
}: AdwardCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_block}>
        <RareBadge variant="rounded" type={type} className={styles.rare} />
        <img className={styles.image} src={image} alt="avatarka" />
      </div>
      <div className={styles.content}>
        <div>
          <Typography tag="h3" variant="title20_bold" className={styles.title}>
            {title}
          </Typography>
          <Typography tag="p" variant="text16_regular">
            Шанс выпадения: {chance}%
          </Typography>
        </div>
        <Typography tag="p" variant="text16_regular">
          Стоимость: {payment} <MoneySvg className={styles.icon} />
        </Typography>
      </div>
    </div>
  );
};
