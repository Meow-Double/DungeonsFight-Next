"use client";

import clsx from "clsx";

import { useAuth } from "@/src/store";
import { Baner, Typography } from "@/src/ui/components";
import { STATICS } from "@/src/utils/constants";

import { RarityStatistics } from "./components";

import styles from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  username: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
  baner: string;
  types: RareStatistics;
  id: number;
  role: "ADMIN" | "USER";
}

export const ProfileInfo = ({
  username,
  email,
  avatarUrl,
  baner,
  types,
  id,
  role,
}: ProfileInfoProps) => {
  const user = useAuth((state) => state.user);
  return (
    <Baner
      banerImage={baner}
      classNameImg={styles.image}
      className={styles.baner}
    >
      <div
        className={clsx(styles.badge, {
          [styles.admin]: role === "ADMIN",
        })}
      >
        {role === "ADMIN" ? "admin" : "user"}
      </div>
      <div className={styles.info}>
        <img
          className={styles.avatarka}
          src={avatarUrl ?? STATICS.AVATARKA}
          alt="avatarka"
        />
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
          <div
            className={clsx({
              [styles.another_user]: user?.id !== id,
            })}
          >
            <RarityStatistics types={types} />
          </div>
        </div>
      </div>
    </Baner>
  );
};
