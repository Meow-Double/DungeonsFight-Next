import { z } from "zod";

import { prisma } from "@/prisma";

import { checkAuth, trpc } from "../utils";

export const shopRouter = trpc.router({
  sellItem: trpc.procedure
    .input(
      z.object({
        quantity: z.number(),
        thingId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Получаем токен и проверяем его наличие
        const token = ctx.token;
        if (!token) throw new Error("Токен не найден");

        // Получаем id пользователя и ищем его в бд, если его нет, возвращаем ошибку
        const userId = checkAuth(token);
        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
          include: {
            bag: true,
          },
        });
        if (!user) throw new Error("Пользователь не найден");

        // Ищем в рюкзаке пользователя нужную нам вещь (bagItem)
        const bagItemFinded = user?.bag.find(
          (item) => item.thingId === input.thingId
        );

        // Если количество вещи, которая в рюкзаке больше чем то количество, что мы передали при продаже
        if (Number(bagItemFinded?.quantity) > input.quantity) {
          // Обновляем вещь, отнимая количество до нужного значения
          await prisma.bagItem.update({
            where: {
              id: bagItemFinded?.id,
            },
            data: {
              quantity: {
                decrement: input.quantity,
              },
            },
          });
        }

        // Если количество вещи, которая в рюкзаке равна тому количеству, что мы передали при продаже
        if (Number(bagItemFinded?.quantity) === input.quantity) {
          // Удаляем вещь
          await prisma.bagItem.delete({
            where: {
              id: bagItemFinded?.id,
            },
          });
        }

        // Ищем нужную нам вещь
        const currentThing = await prisma.thing.findUnique({
          where: {
            id: input.thingId,
          },
        });

        // Находим произведение количества на стоимость
        const newMoney = Number(input.quantity) * Number(currentThing?.payment);

        // Обновляем пользователя
        const updatedUser = await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            money: {
              increment: newMoney,
            },
          },
        });

        // Получаем новый рюкзак
        const newBagItem = await prisma.bagItem.findUnique({
          where: {
            id: bagItemFinded?.id,
          },
          include: {
            thing: true,
          },
        });

        // Возвращаем пользователю данные
        return {
          thing: { ...newBagItem, ...newBagItem?.thing },
          money: updatedUser.money,
        };
      } catch (error) {
        throw error;
      }
    }),
});
