import { z } from "zod";

import { prisma } from "@/prisma";

import { trpc } from "../utils";

export const dungeonsRouter = trpc.router({
  getDungeons: trpc.procedure.input(z.object({})).query(async () => {
    try {
      const dungeons = await prisma.dungeon.findMany({
        include: {
          dungeonAdwards: {
            select: {
              id: true,
            },
          },
        },
      });
      return dungeons;
    } catch (error) {
      console.error("Ошибка при получении подземелей:", error);
      throw new Error("Произошла ошибка при получении подземелей");
    }
  }),
  getDungeon: trpc.procedure
    .input(z.object({ params: z.object({ id: z.number() }) }))
    .query(async ({ input }) => {
      try {
        const dungeon = await prisma.dungeon.findUnique({
          where: {
            id: input.params.id,
          },
          include: {
            dungeonAdwards: true,
          },
        });

        if (!dungeon) {
          throw new Error("Подземелье не найдено");
        }

        const thingsIds = dungeon.dungeonAdwards.map((adward) => adward.id);

        const things = await prisma.thing.findMany({
          where: {
            id: {
              in: thingsIds,
            },
          },
        });

        const newAdwards = dungeon.dungeonAdwards.map((adward) => {
          const findThing = things.find((thing) => thing.id === adward.thingId);
          return {
            ...adward,
            payment: findThing?.payment,
            image: findThing?.image,
            type: findThing?.type,
            title: findThing?.title,
          };
        });

        const newDungeon = {
          ...dungeon,
          dungeonAdwards: newAdwards,
        };
        return newDungeon;
      } catch (error) {
        console.error("Ошибка при получении подземелья:", error);
      }
    }),
});
