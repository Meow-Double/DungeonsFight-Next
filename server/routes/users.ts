import { z } from "zod";

import { prisma } from "@/prisma";

import { trpc } from "../utils";

export const usersRouter = trpc.router({
  getUser: trpc.procedure
    .input(
      z.object({
        params: z.object({
          id: z.number(),
        }),
      })
    )
    .query(async ({ input }) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: input.params.id },
        });

        if (!user) {
          throw new Error("Профиль не найден");
        }

        return user;
      } catch (error) {
        throw error;
      }
    }),
  getUsers: trpc.procedure.query(async () => {
    try {
      const user = await prisma.user.findMany();

      return user;
    } catch (error) {
      throw error;
    }
  }),

  //   createUser: trpc.procedure
  //     .input(
  //       z.object({
  //         username: z.string(),
  //         email: z.string().email(),
  //         password: z.string(),
  //       })
  //     )
  //     .query(async ({ input }) => {
  //       try {
  //       } catch (error) {}
  //     }),
});
