import { Typography } from "@/src/ui/components";

import { SalesCard } from "../SalesCard/SalesCard";

import styles from "./ShopProducts.module.css";

const Data = [1, 2, 3, 4];
export const ShopProducts = () => {
  return (
    <div>
      <Typography tag="h2" variant="text16_regular" className={styles.title}>
        Товар дня:
      </Typography>
      <ul className={styles.items}>
        {Data.map((id) => (
          <SalesCard key={id} />
        ))}
      </ul>
    </div>
  );
};
