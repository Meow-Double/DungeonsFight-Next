import { initTRPC } from "@trpc/server";

import { adwardRouter } from "./adward";
import { authRouter } from "./auth";
import { bagRouter } from "./bag";
import { dungeonsRouter } from "./dungeon";
import { newsRouter } from "./news";
import { shopRouter } from "./shop";
import { staminaRouter } from "./stamina";
import { usersRouter } from "./users";

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(
  usersRouter,
  bagRouter,
  dungeonsRouter,
  authRouter,
  adwardRouter,
  shopRouter,
  newsRouter,
  staminaRouter
);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({ token: null });

// Обновление energy у пользователей

// const prisma = new PrismaClient();

// const updateEnergy = async () => {
//   try {
//     // Найти всех пользователей
//     const users = await prisma.user.findMany();

//     // Отфильтровать пользователей, у которых energy < limitEnergy
//     const eligibleUsers = users.filter(
//       (user) => user.energy < user.limitEnergy
//     );

//     if (!Boolean(eligibleUsers.length)) {
//       console.log("У всех игроков полная энергия");
//       return;
//     }
//     // Обновить energy у найденных пользователей
//     const updatePromises = eligibleUsers.map((user) =>
//       prisma.user.update({
//         where: { id: user.id },
//         data: { energy: { increment: 1 } },
//       })
//     );

//     await Promise.all(updatePromises);

//     console.log("Енергия пополняется");
//   } catch (error) {
//     console.error("Ошибка в пополнение энергии", error);
//   }
// };

// // Запланировать выполнение задачи каждые 5 минут
// cron.schedule("*/10 * * * * *", () => {
//   updateEnergy();
// });
