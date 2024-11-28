"use client";

import { useAuth } from "@/src/store";
import { Baner, Typography } from "@/src/ui/components";

import { RarityStatistics } from "./components";

import styles from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  username: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
  baner: string;
  types: RareStatistics;
  id: number;
}

export const ProfileInfo = ({
  username,
  email,
  avatarUrl,
  baner,
  types,
  id,
}: ProfileInfoProps) => {
  const user = useAuth((state) => state.user);
  return (
    <Baner
      banerImage={baner}
      classNameImg={styles.image}
      className={styles.baner}
    >
      <div className={styles.badge}>admin</div>
      <div className={styles.info}>
        <img className={styles.avatarka} src={avatarUrl} alt="avatarka" />
        <div>
          <div className={styles.personal_data}>
            <Typography tag="h2" variant="title20_bold">
              {username}
            </Typography>
            {user?.id === id && (
              <Typography tag="h4" variant="text16_regular">
                {email}
              </Typography>
            )}
          </div>
          <div>
            <RarityStatistics types={types} />
          </div>
        </div>
      </div>
    </Baner>
  );
};
