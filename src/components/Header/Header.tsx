import Link from "next/link";

import { Container, Logo } from "@/src/ui/components";
import { EnergySvg, MoneySvg, ShopSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils";

import { ProfileBadge } from "./components";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.right_section}>
            <Logo />
            <Link href={ROUTES.SHOP} className={styles.shop_link}>
              <ShopSvg />
              <span>Shop</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            {/* <Button variant="default">Вход</Button> */}
            <div className={styles.row}>
              <span>140</span>
              <MoneySvg className={styles.money_icon} />
            </div>
            <div className={styles.row}>
              <span>+10</span>
              <EnergySvg className={styles.energy_icon} />
            </div>
            <ProfileBadge />
          </nav>
        </div>
      </Container>
    </header>
  );
};
