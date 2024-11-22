import Link from "next/link";

import { ArrowSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils";
import { Dungeons } from "@/src/utils/constants/data";

import { InfoBlock } from "./components";

import styles from "./Dungeon.module.css";

export const DungeonInfo = () => {
  const Dungeon = Dungeons[0];

  return (
    <div className={styles.header}>
      <div>
        <Link className={styles.back} href={ROUTES.MAIN}>
          <ArrowSvg className={styles.arrow} />
          <span>Главная</span>
        </Link>
        <img className={styles.background} src={Dungeon.baner} alt="" />
      </div>
      <div className={styles.info}>
        <img
          className={styles.preview_image}
          src={Dungeon.background}
          alt="preview"
        />
        <InfoBlock {...Dungeon} />
      </div>
    </div>
  );
};
