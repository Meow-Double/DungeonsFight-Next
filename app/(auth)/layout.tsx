import type { Metadata } from "next";
import Link from "next/link";

import { Container, Typography } from "@/src/ui/components";
import { ROUTES, STATICS } from "@/src/utils/constants";
import { getCurrentYear } from "@/src/utils/helpers";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Dungeons Fight | Авторизация",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const currentYear = getCurrentYear();

  return (
    <div className={styles.window}>
      <Container>
        <div className={styles.inner}>
          <img
            className={styles.background}
            src={STATICS.BACKGROUND_AUTH}
            alt="background"
          />
          <div className={styles.text_block}>
            <Link href={ROUTES.MAIN} className={styles.title}>
              <span>Dungeons</span>
              <span className={styles.accent_title}>Fight</span>
            </Link>
            <Typography
              tag="p"
              variant="text16_regular"
              className={styles.text}
            >
              Начни путь искателя приключений прямо сейчас!!!
            </Typography>
          </div>
          <Link
            target="_blank"
            href="https://github.com/Meow-Double"
            className={styles.link}
          >
            ©By Meow-Double {currentYear}
          </Link>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
