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
        src="https://cdn.theanimegallery.com/theanimegallery/fe15732b-0b8d-43d5-a5d3-4bef1e6634c1-dark-aesthetic-anime-wallpaper.webp"
        alt="baner"
      />
      <div className={styles.info}>
        <img
          className={styles.avatarka}
          src="https://stockimg.ai/_next/image?url=https%3A%2F%2Fmedia.stockimg.ai%2Fimage%2F_-kcPkY65ZFQ.png&w=1920&q=75"
          alt="avatarka"
        />
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
