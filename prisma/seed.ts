import { hashSync } from "bcrypt";

import { DungeonAdwards, Dungeons, News, ThingItems } from "./constants";
import { prisma } from "./";
async function generateData() {
  await prisma.user.createMany({
    data: [
      {
        username: "User 1",
        email: "user1@gmail.com",
        password: hashSync("123456", 10),
        avatarUrl:
          "https://avatarfiles.alphacoders.com/374/thumb-1920-374883.png",
        baner:
          "https://cdn.theanimegallery.com/theanimegallery/c251c214-f642-4b71-8476-b0b6873f501e-dark-anime-wallpaper.webp",
      },
      {
        username: "User 2",
        email: "user2@gmail.com",
        password: hashSync("123456", 10),
        avatarUrl: "https://avatarfiles.alphacoders.com/374/374879.png",
        baner: "https://images6.alphacoders.com/135/1351633.png",
      },
    ],
  });
  await prisma.dungeon.createMany({
    data: Dungeons,
  });

  await prisma.thing.createMany({
    data: ThingItems,
  });

  await prisma.bagItem.createMany({
    data: [
      {
        quantity: 5,
        thingId: 1,
        userId: 1,
      },
      {
        quantity: 1,
        thingId: 2,
        userId: 1,
      },
      {
        quantity: 3,
        thingId: 8,
        userId: 1,
      },
      {
        quantity: 7,
        thingId: 19,
        userId: 1,
      },
    ],
  });

  await prisma.dungeonAdward.createMany({
    data: DungeonAdwards,
  });

  await prisma.new.createMany({
    data: News,
  });
}

async function clearData() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Dungeon" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Thing" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "BagItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "DungeonAdward" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await clearData();
    await generateData();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    return;
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
