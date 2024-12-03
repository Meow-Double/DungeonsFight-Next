import { RareBadge, Typography } from "@/src/ui/components";
import { MoneySvg } from "@/src/ui/icons";

import styles from "./InfoWindow.module.css";

interface InfoWindowProps {
  desc: string;
  title: string;
  type: string;
  payment: number;
}

export const InfoWindow = ({ desc, title, type, payment }: InfoWindowProps) => {
  return (
    <div className={styles.menu}>
      <Typography tag="h2" variant="title16_semibold">
        {title}
      </Typography>
      <RareBadge
        type={type}
        text={type}
        variant="default"
        className={styles.badge}
      />
      <p className={styles.desc}>{desc}</p>
      <div className={styles.payment}>
        <span>Стоимость: {payment}</span>
        <MoneySvg className={styles.money_icon} />
      </div>
    </div>
  );
};
