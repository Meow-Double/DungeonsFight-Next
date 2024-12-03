interface UserTypes {
  id: number;
  email: string;
  password: string;
  username: string;
  avatarUrl: string;
  baner: string;
  energy: number;
  limitEnergy: number;
  money: number;
  bag: BagItemTypes[];
  role: "ADMIN" | "USER";
  timeStamina: string;
}

interface ThingTypes {
  id: number;
  image: string;
  title: string;
  desc: string;
  type: string;
  payment: number;
}

interface DungeonTypes {
  preview: string;
  baner: string;
  difficulty: number;
  title: string;
  type: string;
  openTime: string;
  desc: string;
  id: number;
  dungeonAdwards: DungeonAdwardTypes[];
}

interface DungeonAdwardTypes {
  payment?: number;
  image?: string;
  type?: string;
  title?: string;
  id: number;
  thingId: number;
  chance: number;
  dungeonId: number;
}

interface BagItemTypes {
  id: number;
  quantity: number;
  image: string;
  title: string;
  desc: string;
  type: string;
  payment: number;
}

type Users = UserTypes[];
type Things = ThingTypes[];
type Dungeons = DungeonTypes[];
type DungeonAdwards = DungeonAdwardTypes[];
type BagItems = BagItemTypes[];

type DungeonTypeTypes = "dungeon" | "cave" | "arena" | "lair" | "terrain";
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
