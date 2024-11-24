import Link from "next/link";

import { Typography } from "@/src/ui/components";
import { ArrowSvg, SettingsSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils";

import { RarityStatistics } from "./components";

import styles from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  username: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
  baner: string;
  types: RareStatistics;
}

export const ProfileInfo = ({
  username,
  email,
  avatarUrl,
  baner,
  types,
}: ProfileInfoProps) => {
  return (
    <div className={styles.info_block}>
      <Link className={styles.back} href={ROUTES.MAIN}>
        <ArrowSvg className={styles.arrow} />
        <span>Главная</span>
      </Link>
      <Link href="/profile/1/settings" className={styles.settings}>
        <SettingsSvg />
      </Link>
      <img className={styles.baner} src={baner} alt="baner" />
      <div className={styles.info}>
        <img className={styles.avatarka} src={avatarUrl} alt="avatarka" />
        <div>
          <div className={styles.personal_data}>
            <Typography variant="title20_bold">{username}</Typography>
            <Typography variant="text16_regular">{email}</Typography>
          </div>
          <div>
            <RarityStatistics types={types} />
          </div>
        </div>
      </div>
    </div>
  );
};
