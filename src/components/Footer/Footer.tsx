import { Container, Logo, Typography } from "@/src/ui/components";
import { getCurrentYear } from "@/src/utils/helpers";

import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className={styles.footer}>
      <Container variant="footer">
        <div className={styles.inner}>
          <Logo />
          <Typography tag="p" variant="text16_regular">
            Колекционка исторических предметов
          </Typography>
          <Typography tag="p" variant="text16_regular">
            ©DungeonFight {currentYear}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
