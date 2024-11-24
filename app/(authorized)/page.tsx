import type { Metadata } from "next";

import { caller } from "@/server/routes";
import { DungeonCard } from "@/src/components";
import { Container } from "@/src/ui/components";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dungeons Fight | Главная",
  description: "App for fun gaming!",
  icons: "logo.svg",
};

const MainPage = async () => {
  const dungeons = await caller.getDungeons({});
  return (
    <div className={styles.wrapper}>
      <Container>
        <ul className={styles.dungeons_cards}>
          {dungeons.map((dungeon) => (
            <DungeonCard key={dungeon.id} {...dungeon} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default MainPage;
