import { caller } from "@/server/routes";
import { Container, Typography } from "@/src/ui/components";

import styles from "./page.module.css";

const NewsPage = async () => {
  const news = await caller.getNews();

  return (
    <Container>
      <div className={styles.inner}>
        {news?.map((item) => (
          <div className={styles.card} key={item.id}>
            <img className={styles.image} src={item.image} alt="background" />
            <div className={styles.content}>
              <Typography tag="h2" variant="title20_bold">
                {item.title}
              </Typography>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.row}>
                <div className={styles.signature}>
                  <span>{item.signature}</span>
                  <span>Обновление:{item?.version}</span>
                </div>
                <div className={styles.signature}>{item.date.toString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewsPage;
