type DungeonType = "dungeon" | "cave" | "arena" | "lair" | "terrain";
type RareTypes =
  | "ordinary"
  | "rare"
  | "average"
  | "epic"
  | "legendary"
  | "common";

type RareStatistics = Array<{
  rare: RareTypes;
  quantity: number;
}>;

interface BagItem {
  id: number;
  image: string;
  title: string;
  desc: string;
  type: string;
  payment: number;
  quantity: number;
}

type BagItems = BagItem[];

interface DungeonTypes {
  preview: string;
  baner: string;
  difficulty: number;
  title: string;
  type: string;
  openTime: string;
  desc: string;
  id: number;
  dungeonAdwards: DungeonAdwardThing[];
}

interface DungeonAdwardThing {
  id: number;
  chance: number;
  image: string;
  title: string;
  type: string;
  payment: number;
}

interface Thing {
  id: number;
  image: string;
  title: string;
  desc: string;
  type: string;
  payment: number;
}
