import Link from "next/link";

import { ArrowSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils";

import { InfoBlock } from "./components";

import styles from "./Dungeon.module.css";

type DungeonInfoProps = Partial<DungeonTypes>;
export const DungeonInfo = ({
  baner,
  preview,
  openTime,
  difficulty,
  title,
  type,
  dungeonAdwards,
}: DungeonInfoProps) => {
  return (
    <div className={styles.header}>
      <div>
        <Link className={styles.back} href={ROUTES.MAIN}>
          <ArrowSvg className={styles.arrow} />
          <span>Главная</span>
        </Link>
        <img className={styles.background} src={baner} alt="" />
      </div>
      <div className={styles.info}>
        <img className={styles.preview_image} src={preview} alt="preview" />
        <InfoBlock
          openTime={openTime}
          adwardValue={dungeonAdwards?.length}
          difficulty={difficulty}
          title={title}
          type={type}
        />
      </div>
    </div>
  );
};
