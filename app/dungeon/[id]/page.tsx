import type { Metadata } from "next";

import { DungeonDesc, DungeonInfo } from "@/src/components";
import { Container } from "@/src/ui/components";
import { Dungeons } from "@/src/utils/constants/data";

export const metadata: Metadata = {
  title: `${Dungeons[0].title} - ${Dungeons[0].type}`,
};

const DungeonPage = () => {
  return (
    <Container>
      <DungeonInfo />
      <DungeonDesc />
    </Container>
  );
};

export default DungeonPage;
