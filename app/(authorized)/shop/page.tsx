import { SalesMenu, ShopBage, ShopBaner, ShopProducts } from "@/src/components";
import { Container } from "@/src/ui/components";

import styles from "./page.module.css";

const ShopPage = () => {
  return (
    <Container>
      <div className={styles.inner}>
        <ShopBaner />
        <div className={styles.shop}>
          <ShopBage />
          <SalesMenu />
          <ShopProducts />
        </div>
      </div>
    </Container>
  );
};

export default ShopPage;
