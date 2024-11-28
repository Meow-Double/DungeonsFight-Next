"use client";

import { useEffect, useState } from "react";

import { ItemCard } from "@/src/components/ItemCard/ItemCard";
import { useAuth } from "@/src/store";
import { Badge, Button, Modal, Typography } from "@/src/ui/components";
import { AwardSvg, EnergySvg } from "@/src/ui/icons";
import { IMAGES } from "@/src/utils/constants";
import { trpc } from "@/src/utils/hooks";

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
  const { mutate, data } = trpc.getAdward.useMutation({});

  const inToDungeon = () => {
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
    if (data) {
      const newEnergy = Number(user?.energy) - Number(difficulty);
      updateEnergy(newEnergy);
      setIsOpen(true);
    }
  }, [data]);

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
        <Button onClick={inToDungeon} variant="accent">
          Войти
        </Button>
      </div>
      <Modal isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Typography tag="h2" variant="title20_bold">
          Ваша награда
        </Typography>
        <br />
        {Boolean(data) ? (
          <ItemCard
            {...data}
            quantity={1}
            image={data?.image ?? IMAGES.BANER}
            type={data?.type ?? "ordinary"}
          />
        ) : (
          // <AdwardCard {...data} />
          <span>Ничего 😥</span>
        )}
      </Modal>
    </>
  );
};
