import { Baner, Typography } from "@/src/ui/components";

import styles from "./ShopBaner.module.css";

export const ShopBaner = () => {
  return (
    <Baner
      banerImage={"https://images7.alphacoders.com/640/640387.jpg"}
      classNameImg={styles.image}
      className={styles.baner}
    >
      <Typography tag="h1" className={styles.title} variant="title20_bold">
        Shop
      </Typography>
    </Baner>
  );
};
