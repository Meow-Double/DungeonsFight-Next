import Link from "next/link";

import { Typography } from "@/src/ui/components";
import { pathWithSlug, ROUTES } from "@/src/utils/constants";

import styles from "./ProfileBadge.module.css";

interface ProfileBadgeProps {
  id: number;
  avatarUrl: string;
  username: string;
}

export const ProfileBadge = ({
  id,
  avatarUrl,
  username,
}: ProfileBadgeProps) => {
  return (
    <Link
      href={pathWithSlug({ router: ROUTES.PROFILE, slug: id })}
      className={styles.inner}
    >
      <img className={styles.icon} src={avatarUrl} alt="avatarka" />
      <Typography tag="p" variant="text16_regular" className={styles.name}>
        {username}
      </Typography>
    </Link>
  );
};
