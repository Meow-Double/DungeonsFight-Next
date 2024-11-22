import type { Metadata } from "next";
import Link from "next/link";

import { Container, Typography } from "@/src/ui/components";
import { ROUTES } from "@/src/utils";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Dungeons Fight | Авторизация",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.window}>
      <Container>
        <div className={styles.inner}>
          <img
            className={styles.background}
            src="https://w0.peakpx.com/wallpaper/742/475/HD-wallpaper-beast-s-dungeon-dungeon-animation-beast-beauty-disney.jpg"
            alt=""
          />
          <div className={styles.text_block}>
            <Link href={ROUTES.MAIN} className={styles.title}>
              <span>Dungeons</span>
              <span className={styles.accent_title}>Fight</span>
            </Link>
            <Typography variant="text16_regular" className={styles.text}>
              Начни путь искателя приключений прямо сейчас!!!
            </Typography>
          </div>
          <Link
            target="_blank"
            href="https://github.com/Meow-Double"
            className={styles.link}
          >
            ©By Meow-Double 2024
          </Link>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
