"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/src/ui/components";
import { ROUTES } from "@/src/utils/constants";

import styles from "./CommonHeader.module.css";

const MenuLinks = [
  {
    id: 1,
    link: ROUTES.MAIN,
    title: "Главная",
  },
  { id: 2, link: ROUTES.NEWS, title: "Новости" },
  { id: 3, link: ROUTES.USERS, title: "Пользователи" },
  { id: 4, link: ROUTES.HELP, title: "Руководство" },
];

export const CommonHeader = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<null | number>(null);

  useEffect(() => {
    if (pathname) {
      const activePathnameIdx = MenuLinks.findIndex((item) =>
        item.link.includes(pathname)
      );
      if (activePathnameIdx > 0) {
        setActiveItem(activePathnameIdx);
      }
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <nav>
            <ul className={styles.menu}>
              {MenuLinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`${index === activeItem && styles.active}`}
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
