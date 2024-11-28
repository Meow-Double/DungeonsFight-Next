import type { Metadata } from "next";

import { SalesMenu, ShopBage, ShopBaner } from "@/src/components";
import { Container } from "@/src/ui/components";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dungeons Fight | Магазин",
  description: "Магазин, содержащий редкие товары",
  icons: "logo.svg",
};

const ShopPage = () => {
  return (
    <Container>
      <div className={styles.inner}>
        <ShopBaner />
        <div className={styles.shop}>
          <ShopBage />
          <SalesMenu />
          {/* <ShopProducts /> */}
        </div>
      </div>
    </Container>
  );
};

export default ShopPage;
