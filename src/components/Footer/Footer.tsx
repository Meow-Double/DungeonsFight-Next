import { Container, Logo, Typography } from "@/src/ui/components";

import styles from "./Footer.module.css";

export const Footer = () => {
  const NowYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container variant="footer">
        <div className={styles.inner}>
          <Logo />
          <Typography variant="text16_regular">
            Колекционка исторических предметов
          </Typography>
          <Typography variant="text16_regular">
            ©DungeonFight {NowYear}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
