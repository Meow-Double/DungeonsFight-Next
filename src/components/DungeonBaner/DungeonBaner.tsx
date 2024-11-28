import Link from "next/link";

import { Button, Typography } from "@/src/ui/components";
import { AwardSvg, EnergySvg } from "@/src/ui/icons";
import { pathWithSlug, ROUTES } from "@/src/utils/constants";

import styles from "./DungeonBaner.module.css";

interface DungeonBanerProps
  extends Partial<Omit<DungeonTypes, "dungeonAdwards">> {
  adwardsLength: number;
}

export const DungeonBaner = ({
  title,
  type,
  baner,
  difficulty,
  id,
  openTime,
  adwardsLength,
}: DungeonBanerProps) => {
  return (
    <div className={styles.baner}>
      <img className={styles.background} src={baner} alt="baner" />
      <div className={styles.content}>
        <div className={styles.info}>
          <Typography tag="h1" variant="title20_bold">
            {title}
          </Typography>
          <Typography tag="h4" variant="text16_regular">
            {type}
          </Typography>
        </div>
        <ul className={styles.statistics}>
          <li className={styles.statistics_item}>
            <span className={styles.text}>{difficulty}</span>
            <EnergySvg className={styles.icon} />
          </li>
          <li className={styles.statistics_item}>
            <span className={styles.text}>{adwardsLength}</span>
            <AwardSvg className={styles.icon} />
          </li>
        </ul>
      </div>
      <div className={styles.time}>{openTime}</div>
      <div className={styles.button}>
        <Link href={pathWithSlug({ router: ROUTES.DUNGEON, slug: id })}>
          <Button variant="accent">Описание</Button>
        </Link>
      </div>
      <div className={styles.new_text}>Новинка</div>
    </div>
  );
};
