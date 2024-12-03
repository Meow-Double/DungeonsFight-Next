"use client";

import Link from "next/link";
import clsx from "clsx";

import { useAuth } from "@/src/store";
import { Drawer } from "@/src/ui/components";
import {
  BookSvg,
  HomeSvg,
  LogoutSvg,
  NewsSvg,
  SettingsSvg,
  UsersSvg,
} from "@/src/ui/icons";
import { ROUTES } from "@/src/utils/constants";

import styles from "./DrawerMenu.module.css";

interface DrawerMenuProps {
  isOpenDrawer: boolean;
  closeDrawer: () => void;
}

const MenuItems = [
  {
    id: 1,
    title: "Главная",
    link: ROUTES.MAIN,
    icon: (className?: string) => <HomeSvg className={className} />,
  },
  {
    id: 2,
    title: "Новости",
    link: ROUTES.NEWS,
    icon: (className?: string) => <NewsSvg className={className} />,
  },
  {
    id: 3,
    title: "Пользователи",
    link: ROUTES.USERS,
    icon: (className?: string) => <UsersSvg className={className} />,
  },
  {
    id: 4,
    title: "Руководство",
    link: ROUTES.HELP,
    icon: (className?: string) => <BookSvg className={className} />,
  },
  {
    id: 5,
    title: "Настройки",
    link: ROUTES.SETTINGS,
    icon: (className?: string) => <SettingsSvg className={className} />,
  },
];

export const DrawerMenu = ({ isOpenDrawer, closeDrawer }: DrawerMenuProps) => {
  const { user } = useAuth((state) => state);

  return (
    <Drawer
      className={clsx(styles.drawer, {
        [styles.drawer_active]: isOpenDrawer,
      })}
      title="Меню"
      closeDrawer={closeDrawer}
    >
      <nav className={styles.menu}>
        {MenuItems.map((item) => (
          <Link key={item.id} href={item.link} className={styles.item}>
            {item.icon(styles.icon)}
            <span>{item.title}</span>
          </Link>
        ))}
        {user?.role === "ADMIN" && (
          <Link href={ROUTES.ADMIN} className={styles.item}>
            <LogoutSvg className={styles.icon} />
            <span>Админка</span>
          </Link>
        )}
        <Link href={ROUTES.LOGIN} className={styles.item}>
          <LogoutSvg className={styles.icon} />
          <span>{user ? "выход" : "вход"}</span>
        </Link>
      </nav>
    </Drawer>
  );
};
