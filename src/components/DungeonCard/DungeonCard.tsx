import Link from "next/link";

import { Typography } from "@/src/ui/components";
import { AwardSvg, EnergySvg } from "@/src/ui/icons";
import { pathWithSlug, ROUTES } from "@/src/utils/constants";

import styles from "./DungeonCard.module.css";

interface DungeonCardProps
  extends Partial<Omit<DungeonTypes, "dungeonAdwards">> {
  adwardsLength: number;
}

export const DungeonCard = ({
  title,
  type,
  preview,
  difficulty,
  id,
  adwardsLength,
}: DungeonCardProps) => {
  return (
    <Link href={pathWithSlug({ router: ROUTES.DUNGEON, slug: id })}>
      <div className={styles.card}>
        <img className={styles.background} src={preview} alt="preview" />
        <div className={styles.content}>
          <ul className={styles.info}>
            <li className={styles.info_item}>
              <EnergySvg className={styles.icon} />
              <Typography
                tag="div"
                variant="title20_bold"
                className={styles.info_title}
              >
                {difficulty}
              </Typography>
            </li>
            <li className={styles.info_item}>
              <AwardSvg className={styles.icon} />
              <Typography
                tag="div"
                variant="title20_bold"
                className={styles.info_title}
              >
                {adwardsLength}
              </Typography>
            </li>
          </ul>
          <div>
            <Typography
              tag="h2"
              variant="title20_bold"
              className={styles.title}
            >
              {title}
            </Typography>
            <Typography
              tag="h4"
              variant="text16_regular"
              className={styles.type}
            >
              {type}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};
