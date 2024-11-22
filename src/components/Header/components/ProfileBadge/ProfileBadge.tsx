import Link from "next/link";

import { Typography } from "@/src/ui/components";

import styles from "./ProfileBadge.module.css";

// interface ProfileBadgeProps {}

export const ProfileBadge = () => {
  return (
    <Link href="/profile/1" className={styles.inner}>
      <img
        className={styles.icon}
        src="https://stockimg.ai/_next/image?url=https%3A%2F%2Fmedia.stockimg.ai%2Fimage%2F_-kcPkY65ZFQ.png&w=1920&q=75"
        alt="avatarka"
      />
      <Typography variant="text16_regular" className={styles.name}>
        Slava
      </Typography>
    </Link>
  );
};
