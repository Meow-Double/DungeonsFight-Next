import { Baner } from "@/src/ui/components";
import { IMAGES } from "@/src/utils/constants";

import { InfoBlock } from "./components";

import styles from "./Dungeon.module.css";

type DungeonInfoProps = Omit<DungeonTypes, "desc">;
export const DungeonInfo = ({
  baner,
  preview,
  openTime,
  difficulty,
  title,
  type,
  dungeonAdwards,
  id,
}: DungeonInfoProps) => {
  return (
    <Baner
      banerImage={baner ?? IMAGES.BANER}
      classNameImg={styles.background}
      className={styles.baner}
    >
      <div className={styles.info}>
        <img className={styles.preview_image} src={preview} alt="preview" />
        <InfoBlock
          openTime={openTime}
          adwardValue={dungeonAdwards}
          difficulty={difficulty}
          title={title}
          type={type}
          id={id}
        />
      </div>
    </Baner>
  );
};
