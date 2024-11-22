import Link from "next/link";

import { Typography } from "@/src/ui/components";
import { ArrowSvg, SettingsSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils";

import { RarityStatistics } from "./components";

import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div className={styles.info_block}>
      <Link className={styles.back} href={ROUTES.MAIN}>
        <ArrowSvg className={styles.arrow} />
        <span>Главная</span>
      </Link>
      <Link href="/profile/1/settings" className={styles.settings}>
        <SettingsSvg />
      </Link>
      <img
        className={styles.baner}
        src="/dungeons/background1.png"
        alt="baner"
      />
      <div className={styles.info}>
        <img className={styles.avatarka} src="/dungeons/image.png" alt="" />
        <div>
          <div className={styles.personal_data}>
            <Typography variant="title20_bold">User 1</Typography>
            <Typography variant="text16_regular">
              user.2025@gmail.com
            </Typography>
          </div>
          <div>
            <RarityStatistics />
          </div>
        </div>
      </div>
    </div>
  );
};
