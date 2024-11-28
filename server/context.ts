import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = ({ req }: CreateNextContextOptions) => {
  const authorization = req.headers.authorization;
  const token = authorization ? authorization.split(" ")[1] : null;

  return {
    token,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
