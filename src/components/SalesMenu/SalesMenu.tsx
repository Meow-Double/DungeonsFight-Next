"use client";

import { useEffect } from "react";

import { useAuth } from "@/src/store";
import { useBag } from "@/src/store/bag";
import { useSellItem } from "@/src/store/sellItem";
import { Button, RareBadge, Typography } from "@/src/ui/components";
import { MoneySvg } from "@/src/ui/icons";
import { trpc, useCount } from "@/src/utils/hooks";

import styles from "./SalesMenu.module.css";

export const SalesMenu = () => {
  const { dicrement, increment, count, setCount } = useCount(1);
  const { sellItem, setSellItem } = useSellItem((state) => state);
  const { mutate, data } = trpc.sellItem.useMutation({});
  const { setBag, bag } = useBag();
  const updateMoney = useAuth((state) => state.updateMoney);

  useEffect(() => {
    setCount(1);
  }, [sellItem]);

  const onSellItem = () => {
    if (sellItem) {
      mutate({
        quantity: count,
        thingId: sellItem?.id,
      });
    }
  };

  useEffect(() => {
    if (data) {
      if (Object.keys(data.thing).length !== 0) {
        const findBagIndex = bag.findIndex((item) => item.id === data.thing.id);
        const newBag = [...bag];
        const newObject: BagItemTypes = {
          desc: data.thing.desc ?? "",
          id: data.thing.id ?? 1,
          image: data.thing.image ?? "",
          payment: data.thing.payment ?? 0,
          quantity: data.thing.quantity ?? 0,
          title: data.thing.title ?? "",
          type: data.thing.type ?? "",
        };
        newBag[findBagIndex] = newObject;
        setSellItem(newBag[findBagIndex]);
        setBag(newBag);
      } else {
        const newBag = bag.filter((item) => item.id !== sellItem?.id);
        setSellItem(null);
        setBag(newBag);
      }
      updateMoney(Number(data.money));
    }
  }, [data]);

  return (
    <>
      {sellItem ? (
        <div className={styles.board}>
          <div className={styles.item}>
            <span className={styles.text}>{sellItem.quantity}</span>
            <img src={sellItem.image} alt="" className={styles.image} />
          </div>
          <div className={styles.content}>
            <Typography
              tag="h2"
              variant="title20_bold"
              className={styles.title}
            >
              {sellItem.title}
            </Typography>
            <RareBadge
              text={sellItem.type}
              type={sellItem.type}
              className={styles.type}
            />
            <Typography
              tag="p"
              variant="text16_regular"
              className={styles.payment}
            >
              <span>Стоимость: {sellItem.payment * count}</span>
              <MoneySvg className={styles.icon} />
            </Typography>
            <div className={styles.count_input}>
              <button
                className={styles.btn}
                onClick={dicrement}
                disabled={count === 1}
              >
                -
              </button>
              <span className={styles.count_text}>{count}</span>
              <button
                className={styles.btn}
                onClick={increment}
                disabled={count === sellItem.quantity}
              >
                +
              </button>
            </div>
            <Button variant="accent" onClick={onSellItem}>
              Продать
            </Button>
          </div>
        </div>
      ) : (
        <span>Выберите предмет для продажи</span>
      )}
    </>
  );
};
