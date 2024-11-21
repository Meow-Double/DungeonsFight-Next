import { DungeonCard } from "@/src/components";
import { Container } from "@/src/ui/components";
import { Dungeons } from "@/src/utils/constants/data";

import styles from "./page.module.css";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <ul className={styles.dungeons_cards}>
          {Dungeons.map((dungeon) => (
            <DungeonCard key={dungeon.id} {...dungeon} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default MainPage;
