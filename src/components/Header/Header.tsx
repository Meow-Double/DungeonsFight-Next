import { Button, Container, Logo } from "@/src/ui/components";
import { ShopSvg } from "@/src/ui/icons/ShopSvg";

import { ProfileBadge } from "./components";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.right_section}>
            <Logo />
            <Button variant="section" startIcon={<ShopSvg />}>
              Shop
            </Button>
          </div>
          <nav>
            {/* <Button variant="default">Вход</Button> */}
            <ProfileBadge />
          </nav>
        </div>
      </Container>
    </header>
  );
};
