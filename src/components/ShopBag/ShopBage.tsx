"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import { useBag } from "@/src/store/bag";
import { useSellItem } from "@/src/store/sellItem";
import { Typography } from "@/src/ui/components";

import { ItemCard } from "../ItemCard/ItemCard";

// import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./ShopBage.module.css";

export const ShopBage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { sellItem, setSellItem } = useSellItem((state) => state);
  const bag = useBag((state) => state.bag);

  const onClickCard = (index: number) => {
    setActiveIndex(index);
    const findItem: BagItemTypes = bag[index];
    if (findItem) {
      setSellItem(findItem);
    }
  };

  useEffect(() => {
    if (!sellItem) {
      setActiveIndex(null);
    }
  }, [sellItem]);

  return (
    <div>
      <Typography tag="h2" variant="text16_regular" className={styles.title}>
        Мой товар: {!Boolean(bag.length) && "Отвуствует"}
      </Typography>
      <ul className={styles.items}>
        {bag?.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onClickCard(index)}
            className={clsx({
              [styles.active]: index === activeIndex,
            })}
          >
            <ItemCard {...item} isInfo={false} />
          </button>
        ))}
      </ul>
    </div>
  );
};
