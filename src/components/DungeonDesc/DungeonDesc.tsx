import { Typography } from "@/src/ui/components";
import { AwardSvg } from "@/src/ui/icons";
import { Adward, Dungeons } from "@/src/utils/constants/data";

import { AdwardCard, DescriptionBlock } from "./components";

import styles from "./DungeonDesc.module.css";

export const DungeonDesc = () => {
  return (
    <div className={styles.inner}>
      <DescriptionBlock desc={Dungeons[0].desc} />
      <AwardSvg />
      <div>
        <Typography variant="title20_bold" className={styles.title}>
          Виды наград:
        </Typography>
        <ul className={styles.adwards}>
          {Adward.map((item) => (
            <li key={item.id}>
              <AdwardCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
