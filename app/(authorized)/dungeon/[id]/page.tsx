import { caller } from "@/server/routes";
import { DungeonDesc, DungeonInfo } from "@/src/components";
import { Container } from "@/src/ui/components";

interface DungeonPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DungeonPage = async ({ params }: DungeonPageProps) => {
  const { id } = await params;
  const dungeon = await caller.getDungeon({
    params: { id: Number(id) },
  });

  return (
    <Container>
      {dungeon && (
        <>
          <DungeonInfo {...dungeon} />
          <DungeonDesc
            desc={dungeon.desc}
            dungeonAdwards={dungeon.dungeonAdwards}
          />
        </>
      )}
    </Container>
  );
};

export default DungeonPage;
