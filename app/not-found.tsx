import { Container, Logo } from "@/src/ui/components";

import styles from "./page.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.window}>
      <Container>
        <div>
          {/* <img src="" alt="" /> */}
          <div className={styles.content}>
            <Logo />
            <span>404 Страница не найдена</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
