import { Badge, Button, Typography } from "@/src/ui/components";
import { AwardSvg, EnergySvg } from "@/src/ui/icons";

import styles from "./InfoBlock.module.css";

interface InfoBlockProps {
  openTime?: string;
  adwardValue?: number;
  difficulty?: number;
  title?: string;
  type?: string;
}

export const InfoBlock = ({
  openTime,
  adwardValue,
  difficulty,
  title,
  type,
}: InfoBlockProps) => {
  return (
    <div className={styles.content}>
      <ul className={styles.info}>
        {/* <li className={styles.item}>
          <span>Ценность наград: </span>
          <div className={styles.value}>
            <span>70%</span> <AwardSvg />
          </div>
        </li> */}
        <li className={styles.item}>
          <span>Сложность: </span>
          <div className={styles.value}>
            <span>{difficulty}</span> <EnergySvg className={styles.icon} />
          </div>
        </li>
        <li className={styles.item}>
          <span>Ценность наград: </span>
          <div className={styles.value}>
            <span>{adwardValue}</span>
            <AwardSvg className={styles.icon} />
          </div>
        </li>
      </ul>
      <Badge variant="dungeon" text={openTime ?? "отсуствует"} />
      <div>
        <Typography className={styles.title} variant="title20_bold">
          {title}
        </Typography>
        <Typography variant="text16_regular">{type}</Typography>
      </div>
      <Button variant="accent">Войти</Button>
    </div>
  );
};
