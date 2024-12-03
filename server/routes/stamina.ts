import { prisma } from "@/prisma";

import { checkAuth, getISO, trpc } from "../utils";
import { getTime } from "../utils/gteTime";

export const staminaRouter = trpc.router({
  getStamina: trpc.procedure.query(async ({ ctx }) => {
    try {
      // Получаем токен и проверяем его наличие
      const token = ctx.token;
      if (!token) throw new Error("Токен не найден");

      // Получаем по токену id пользователяи ищем его в базе данных. Если пользователя не существует, возвращаем ошибку
      const userId = checkAuth(token);
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      });
      if (!user) throw new Error("Пользователь не найден");

      if (!user.timeStamina) throw new Error();

      //   стамина восполняется в 1 минуту
      const staminaReset = 60; //seconds

      const currentDate = getISO();

      const { timestampInSeconds } = getTime(user.timeStamina); // Получаем время стамины пользователя

      // Получаем текущее время
      const { timestampInSeconds: currentTimeInSeconds } = getTime(currentDate);

      //Проверяем разницу

      const timeDifference = currentTimeInSeconds - timestampInSeconds;

      const addedEnergy = (timeDifference / staminaReset) >> 0;

      if (user.limitEnergy > user.energy + addedEnergy) {
        const NewTimeSeconds = timestampInSeconds + addedEnergy * staminaReset;
        const isoDate = getISO(NewTimeSeconds);

        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            energy: {
              increment: addedEnergy,
            },
            timeStamina: isoDate,
          },
        });
      } else {
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            energy: user.limitEnergy,
            timeStamina: null,
          },
        });

        return {
          timeNextRequest: 0,
        };
      }

      const timeNextRequest = staminaReset - (timeDifference % staminaReset);
      const energy = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          energy: true,
        },
      });
      return {
        timeNextRequest,
        energy: energy && energy["energy"],
      };
    } catch (error) {
      throw error;
    }
  }),
});
