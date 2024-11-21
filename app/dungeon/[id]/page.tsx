import { DungeonDesc, DungeonInfo } from "@/src/components";
import { Container } from "@/src/ui/components";

const DungeonPage = () => {
  return (
    <Container>
      <DungeonInfo />
      <DungeonDesc />
    </Container>
  );
};

export default DungeonPage;
