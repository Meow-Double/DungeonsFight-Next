import { Typography } from "@/src/ui/components";

// import { ItemCard } from "../ItemCard/ItemCard";

import styles from "./ShopBage.module.css";

export const ShopBage = () => {
  return (
    <div>
      <Typography variant="text16_regular" className={styles.title}>
        Мой товар:
      </Typography>
      {/* <ul className={styles.items}>
        {Data.map((id) => (
          <button key={id}>
            <ItemCard />
          </button>
        ))}
      </ul> */}
    </div>
  );
};
