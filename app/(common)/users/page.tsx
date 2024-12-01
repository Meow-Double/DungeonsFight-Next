import Link from "next/link";

import { caller } from "@/server/routes";
import { Button, Container, Input, Typography } from "@/src/ui/components";
import { pathWithSlug, ROUTES } from "@/src/utils/constants";

import styles from "./page.module.css";

const UsersPage = async () => {
  const users = await caller.getUsers();
  return (
    <Container>
      <div className={styles.search}>
        <Input component="input" variant="primary" />
        <Button className={styles.button} variant="accent">
          Найти
        </Button>
      </div>
      <Typography tag="h1" variant="title20_bold">
        Пользователи:
      </Typography>
      <ul className={styles.cards}>
        {users.map((user, index) => (
          <li key={user.id}>
            <Link
              href={pathWithSlug({ router: ROUTES.PROFILE, slug: user.id })}
              className={styles.card}
            >
              <img
                className={styles.avatarka}
                src={user.avatarUrl}
                alt="user"
              />
              <div className={styles.content}>
                <Typography
                  tag="h2"
                  variant="title16_semibold"
                  className={styles.username}
                >
                  {user.username}
                </Typography>
                <div className={styles.badges}>
                  <span className={styles.badge}>{user.role}</span>
                  {index === 2 && (
                    <span className={styles.badge2}>Магистр</span>
                  )}
                  {index === 3 && (
                    <span className={styles.badge3}>Ужасающий</span>
                  )}
                  {index === 2 && <span className={styles.badge4}>ПВЕ</span>}
                  {index === 2 && (
                    <span className={styles.badge3}>Ужасающий</span>
                  )}
                  {index === 2 && <span className={styles.badge5}>Лекарь</span>}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UsersPage;
