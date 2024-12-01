import { prisma } from "@/prisma";

import { trpc } from "../utils";

export const newsRouter = trpc.router({
  getNews: trpc.procedure.query(async () => {
    try {
      const news = await prisma.new.findMany({
        orderBy: { createdAt: "desc" },
      });

      const formattedNews = news.map((item) => {
        const date = new Date(item.createdAt);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const currentDate = `${day}.${month}.${year}`;
        return {
          ...item,
          date: currentDate,
        };
      });

      return formattedNews;
    } catch (error) {
      throw error;
    }
  }),
});
