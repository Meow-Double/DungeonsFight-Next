import type { Metadata } from "next";

import { caller } from "@/server/routes";
import { DungeonDesc, DungeonInfo } from "@/src/components";
import { Container } from "@/src/ui/components";
import { Dungeons } from "@/src/utils/constants/data";

export const metadata: Metadata = {
  title: `${Dungeons[0].title} - ${Dungeons[0].type}`,
};

interface DungeonPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DungeonPage = async ({ params }: DungeonPageProps) => {
  const { id } = await params;
  const dungeon = (await caller.getDungeon({
    params: { id: Number(id) },
  })) as Partial<DungeonTypes>;

  return (
    <Container>
      <DungeonInfo {...dungeon} />
      <DungeonDesc {...dungeon} />
    </Container>
  );
};

export default DungeonPage;
