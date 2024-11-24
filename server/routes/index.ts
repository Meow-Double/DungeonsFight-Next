import { initTRPC } from "@trpc/server";

import { bagRouter } from "./bag";
import { dungeonsRouter } from "./dungeon";
import { usersRouter } from "./users";

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(
  usersRouter,
  bagRouter,
  dungeonsRouter
);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller(appRouter);
