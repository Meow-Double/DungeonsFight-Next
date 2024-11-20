import { Button, Container, Logo } from "@/src/ui/components";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <nav>
            <Button variant="default">Вход</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};
