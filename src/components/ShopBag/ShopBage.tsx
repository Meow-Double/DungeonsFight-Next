"use client";

import { useBag } from "@/src/store/bag";
import { useSellItem } from "@/src/store/sellItem";
import { Typography } from "@/src/ui/components";

import { ItemCard } from "../ItemCard/ItemCard";

// import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./ShopBage.module.css";

export const ShopBage = () => {
  const setSellItem = useSellItem((state) => state.setSellItem);
  const bag = useBag((state) => state.bag);
  // const user = useAuth((state) => state.user);
  // const { data: bag } = trpc.getUserBag.useQuery({
  //   params: {
  //     userId: Number(user?.id),
  //   },
  // });
  const onClickCard = (id: number) => {
    const findItem = bag.find((bagItem) => bagItem.id === id);
    if (findItem) {
      setSellItem(findItem);
    }
  };

  return (
    <div>
      <Typography tag="h2" variant="text16_regular" className={styles.title}>
        Мой товар:
      </Typography>
      <ul className={styles.items}>
        {bag?.map((item) => (
          <button key={item.id} onClick={() => onClickCard(item.id)}>
            <ItemCard {...item} />
          </button>
        ))}
      </ul>
    </div>
  );
};
