import { z } from "zod";

import { prisma } from "@/prisma";

import { trpc } from "../utils";

export const bagRouter = trpc.router({
  getUserBag: trpc.procedure
    .input(
      z.object({
        params: z.object({
          userId: z.number(),
        }),
      })
    )
    .query(async ({ input }) => {
      const bagItems = await prisma.bagItem.findMany({
        where: {
          userId: input.params.userId,
        },
        include: {
          thing: true,
        },
      });

      const bag = bagItems.map((bagItem) => ({
        quantity: bagItem.quantity,
        ...bagItem.thing,
      }));

      return bag;
    }),
});
