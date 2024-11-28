import type { Metadata } from "next";

import { caller } from "@/server/routes";
import { DungeonBaner, DungeonCard } from "@/src/components";
import { Container } from "@/src/ui/components";

import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Dungeons Fight | Главная",
  description: "App for fun gaming!",
  icons: "logo.svg",
};

const MainPage = async () => {
  const dungeons = await caller.getDungeons({});
  const dungeonBaner = dungeons[dungeons.length - 1];
  const dungeonsData = dungeons.slice(0, -1);

  return (
    <div className={styles.wrapper}>
      <Container>
        <DungeonBaner
          {...dungeonBaner}
          adwardsLength={dungeonBaner.dungeonAdwards.length}
        />
        {dungeonsData && (
          <ul className={styles.dungeons_cards}>
            {dungeonsData?.map((dungeon) => (
              <DungeonCard
                key={dungeon.id}
                {...dungeon}
                adwardsLength={dungeon.dungeonAdwards?.length}
              />
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
};

export default MainPage;
