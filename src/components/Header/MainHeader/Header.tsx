"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/src/store";
import { Button, Container, Logo } from "@/src/ui/components";
import { EnergySvg, MenuSvg, MoneySvg, ShopSvg } from "@/src/ui/icons";
import { ROUTES, STATICS } from "@/src/utils/constants";

import { DrawerMenu, ProfileBadge } from "./components";

import styles from "./Header.module.css";

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const user = useAuth((state) => state.user);

  const router = useRouter();

  const onLogin = () => {
    router.push(ROUTES.LOGIN);
  };
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>
            <div className={styles.right_section}>
              <button
                onClick={() => setIsOpenDrawer(true)}
                className={styles.burger_btn}
              >
                <MenuSvg className={styles.menu_icon} />
              </button>
              <Logo />
              <Link href={ROUTES.SHOP} className={styles.shop_link}>
                <ShopSvg />
                <span>Магазин</span>
              </Link>
            </div>
            <nav className={styles.nav}>
              {user ? (
                <>
                  <div className={styles.row}>
                    <span>{user.money}</span>
                    <MoneySvg className={styles.money_icon} />
                  </div>
                  <div className={styles.row}>
                    <span>
                      {user.energy}/{user.limitEnergy}
                    </span>
                    <EnergySvg className={styles.energy_icon} />
                  </div>
                  <ProfileBadge
                    id={Number(user?.id)}
                    avatarUrl={user?.avatarUrl ?? STATICS.AVATARKA}
                    username={String(user?.username)}
                  />
                </>
              ) : (
                <Button variant="default" onClick={onLogin}>
                  Вход
                </Button>
              )}
            </nav>
          </div>
        </Container>
      </header>
      <DrawerMenu
        closeDrawer={() => setIsOpenDrawer(false)}
        isOpenDrawer={isOpenDrawer}
      />
    </>
  );
};
