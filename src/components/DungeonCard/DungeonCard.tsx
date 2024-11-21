import Link from "next/link";

import { Typography } from "@/src/ui/components";
import { AwardSvg, EnergySvg } from "@/src/ui/icons";
import { pathWithSlug, ROUTES } from "@/src/utils";

import styles from "./DungeonCard.module.css";

interface DungeonCardProps {
  title: string;
  type: string;
  background: string;
  energy: number;
  adward: number;
  id: number;
}

export const DungeonCard = ({
  title,
  type,
  background,
  energy,
  adward,
  id,
}: DungeonCardProps) => {
  return (
    <Link href={pathWithSlug({ router: ROUTES.DUNGEON, slug: id })}>
      <div className={styles.card}>
        <img className={styles.background} src={background} alt="background" />
        <div className={styles.content}>
          <ul className={styles.info}>
            <li className={styles.info_item}>
              <EnergySvg />
              <Typography variant="title20_bold" className={styles.info_title}>
                {energy}
              </Typography>
            </li>
            <li className={styles.info_item}>
              <AwardSvg />
              <Typography variant="title20_bold" className={styles.info_title}>
                {adward}%
              </Typography>
            </li>
          </ul>
          <div>
            <Typography variant="title20_bold" className={styles.title}>
              {title}
            </Typography>
            <Typography variant="text16_regular" className={styles.type}>
              {type}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};
