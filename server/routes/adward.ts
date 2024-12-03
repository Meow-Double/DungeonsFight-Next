import { z } from "zod";

import { prisma } from "@/prisma";

import { checkAuth, getISO, getRandomAdward, trpc } from "../utils";

export const adwardRouter = trpc.router({
  getAdward: trpc.procedure
    .input(
      z.object({
        difficulty: z.number(),
        dungeonId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Получаем токен и проверяем его на наличие
        const token = ctx.token;
        if (!token) throw new Error("Токен не найден");

        // Получаем пользователя
        const userId: number = checkAuth(token);
        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
          include: {
            bag: true,
          },
        });

        if (!user) throw new Error("Пользователя не существует");

        // Получаем энергию и проверяем, достаточно ли её
        const currentEnergy: number = user.energy;
        if (input.difficulty > currentEnergy)
          throw new Error("У вас не хватает энергии");

        // Получаем разницу энергий - обновлённое значение и обновляем
        const newEnergy = currentEnergy - input.difficulty;
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            energy: newEnergy,
          },
        });

        // Ищем конкретное подземелье, в котором участвуем
        const dungeon = await prisma.dungeon.findUnique({
          where: {
            id: input.dungeonId,
          },
          include: {
            dungeonAdwards: true,
          },
        });

        const isoDate = getISO();
        //Проверяем ISO время для отслеживание энергии
        if (!user.timeStamina) {
          //Создаём ISO время для отслеживание энергии
          await prisma.user.update({
            where: {
              id: userId,
            },
            data: {
              timeStamina: isoDate,
            },
          });
        }

        // Получаем рандомную вещь из подземелья
        const randomAdward: {
          id: number;
          chance: number;
          dungeonId: number;
          thingId: number;
        } = getRandomAdward(dungeon?.dungeonAdwards ?? []);

        // Проверяем, если вещи нет, значит возвращаем пользователю сообщение -  "Пусто"
        if (Object.keys(randomAdward).length === 0)
          return { adward: null, timeStamina: isoDate };

        // Если вешь найдена, получаем её со всеми нужными данными
        const adward = await prisma.thing.findUnique({
          where: {
            id: (randomAdward as { thingId: number }).thingId,
          },
        });

        // Проверяем, есть ли в рюкзаке пользователя нужная нам вещь
        const currentThing = user.bag.find(
          (item) => item.thingId === adward?.id
        );

        if (currentThing) {
          // Вещь есть, находим её в бд и обновляем количество на +1
          await prisma.bagItem.update({
            where: {
              id: currentThing.id,
            },
            data: {
              quantity: {
                increment: 1,
              },
            },
          });

          // Возвращаем пользователю награду
          return { adward, timeStamina: isoDate };
        }

        // Вещи в рюкзаке нет, if не отработал. Создаём новый объект - bagItem и заносим в бд
        const newBagItem = {
          quantity: 1,
          thingId: adward?.id ?? 1,
          userId: userId ?? 1,
        };

        await prisma.bagItem.create({
          data: newBagItem,
        });

        // Возвращаем пользователю награду
        return { adward, timeStamina: isoDate };
      } catch (error) {
        throw error;
      }
    }),
});
