import { Typography } from "@/src/ui/components";
import { AwardSvg } from "@/src/ui/icons";

import { AdwardCard, DescriptionBlock } from "./components";

import styles from "./DungeonDesc.module.css";

interface DungeonDescProps {
  desc: string;
  dungeonAdwards: DungeonAdwards;
}

export const DungeonDesc = ({ desc, dungeonAdwards }: DungeonDescProps) => {
  return (
    <div className={styles.inner}>
      <DescriptionBlock desc={desc ?? "описание отсуствует"} />
      <AwardSvg />
      <div>
        <Typography tag="h2" variant="title20_bold" className={styles.title}>
          Виды наград:
          {!Boolean(dungeonAdwards?.length) && "награда отсуствует"}
        </Typography>
        {Boolean(dungeonAdwards?.length) && (
          <ul className={styles.adwards}>
            {dungeonAdwards?.map((adward) => (
              <li key={adward.id}>
                <AdwardCard {...adward} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
