"use client";

import { useEffect, useState } from "react";

import { useAuth, useBag } from "@/src/store";
import { Badge, Button, Typography } from "@/src/ui/components";
import { AwardSvg, EnergySvg } from "@/src/ui/icons";
import { trpc } from "@/src/utils/hooks";

import { AdwardModal } from "../AdwardModal/AdwardModal";

import styles from "./InfoBlock.module.css";

interface InfoBlockProps {
  openTime: string;
  adwardValue: DungeonAdwards;
  difficulty: number;
  title: string;
  type: string;
  id: number;
}

export const InfoBlock = ({
  openTime,
  adwardValue,
  difficulty,
  title,
  type,
  id,
}: InfoBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, updateEnergy } = useAuth();
  const addBagItem = useBag((state) => state.addBagItem);
  const { mutate, data } = trpc.getAdward.useMutation({});
  const [isDisabled, setIsDisabled] = useState(false);

  const inToDungeon = () => {
    setIsDisabled(true);
    if (Number(user?.energy) >= Number(difficulty)) {
      mutate({
        difficulty: Number(difficulty),
        dungeonId: id,
      });
    } else {
      alert("У вас недостаточно энергии");
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      const newEnergy = Number(user?.energy) - Number(difficulty);
      updateEnergy(newEnergy);
      setIsOpen(true);
      if (data) {
        addBagItem({ ...data, quantity: 1 });
      }
    }
  }, [data]);

  useEffect(() => {
    if (isDisabled) {
      const timerId = setTimeout(() => {
        setIsDisabled(false);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [isDisabled]);

  return (
    <>
      <div className={styles.content}>
        <ul className={styles.info}>
          <li className={styles.item}>
            <span>Сложность: </span>
            <div className={styles.value}>
              <span>{difficulty}</span> <EnergySvg className={styles.icon} />
            </div>
          </li>
          <li className={styles.item}>
            <span>Ценность наград: </span>
            <div className={styles.value}>
              <span>{adwardValue?.length}</span>
              <AwardSvg className={styles.icon} />
            </div>
          </li>
        </ul>
        <Badge variant="dungeon" text={openTime ?? "отсуствует"} />
        <div>
          <Typography tag="h2" className={styles.title} variant="title20_bold">
            {title}
          </Typography>
          <Typography tag="h4" variant="text16_regular">
            {type}
          </Typography>
        </div>
        <Button onClick={inToDungeon} variant="accent" disabled={isDisabled}>
          Войти
        </Button>
      </div>
      {isOpen && (
        <AdwardModal
          onClose={() => setIsOpen(false)}
          item={data}
          energe={Number(difficulty)}
        />
      )}
    </>
  );
};
