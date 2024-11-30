import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { prisma } from "@/prisma";
import { STATICS } from "@/src/utils/constants";

import { checkAuth, trpc } from "../utils";

export const authRouter = trpc.router({
  register: trpc.procedure
    .input(
      z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { username, password, email } = input;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (user) throw new Error("Пользователь существует");

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const userData = {
          email,
          username,
          password: hash,
          baner: STATICS.BANER,
          avatarUrl: STATICS.AVATARKA,
        };

        const currentUser = await prisma.user.create({
          data: userData,
        });

        const token = jwt.sign(
          {
            id: currentUser.id,
          },
          process.env.AUTH_SECRET_KEY ?? "123",
          {
            expiresIn: "30d",
          }
        );

        return { token, ...currentUser };
      } catch (error) {
        throw error;
      }
    }),
  login: trpc.procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: input.email,
          },
        });

        if (!user) throw new Error("Пользователь не зарегестрирован");

        const validatePassword = await bcrypt.compare(
          input.password,
          user.password
        );
        if (!validatePassword) throw new Error("Не верная почта или пароль");

        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.AUTH_SECRET_KEY ?? "123",
          { expiresIn: "30d" }
        );

        const userWithoutPassword = {
          username: user.username,
          email: user.email,
          id: user.id,
          avatarUrl: user.avatarUrl,
          baner: user.baner,
          energy: user.energy,
          limitEnergy: user.limitEnergy,
          money: user.money,
          role: user.role,
        };

        // Работа с coockie (Создаём и сохраняем)
        // await fetch("http://localhost:3000/api/setCookie", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ token }),
        // });

        return { ...userWithoutPassword, token };
      } catch (error) {
        throw error;
      }
    }),
  getMe: trpc.procedure.query(async ({ ctx }) => {
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

      // Ищем вещи пользователя
      const bagItems = await prisma.bagItem.findMany({
        where: {
          userId: userId,
        },
        include: {
          thing: true,
        },
      });

      // Формируем рюкзак пользователя
      const bag = bagItems.map((bagItem) => ({
        quantity: bagItem.quantity,
        ...bagItem.thing,
      }));

      // Возвращаем пользователю его данные и рюкзак
      return { user, bag };
    } catch (error) {
      throw error;
    }
  }),
});
