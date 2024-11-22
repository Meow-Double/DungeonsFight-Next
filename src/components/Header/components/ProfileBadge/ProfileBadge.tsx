import Link from "next/link";

import { Typography } from "@/src/ui/components";

import styles from "./ProfileBadge.module.css";

// interface ProfileBadgeProps {}

export const ProfileBadge = () => {
  return (
    <Link href="/profile/1" className={styles.inner}>
      <img
        className={styles.icon}
        src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        alt="avatarka"
      />
      <Typography variant="text16_regular" className={styles.name}>
        Slava
      </Typography>
    </Link>
  );
};
