/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */

import type { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

interface DecodedToken extends jwt.JwtPayload {
  id?: number;
}

export const checkAuth = (token: JwtPayload | string): number => {
  const currentToken: string = (token || "").replace(/Bearer\s?/, "");

  if (currentToken) {
    try {
      const decoded = jwt?.verify(
        currentToken,
        process.env.AUTH_SECRET_KEY ?? "123"
      ) as DecodedToken;

      if (
        typeof decoded !== "string" &&
        "id" in decoded &&
        decoded.id !== undefined
      ) {
        const userId: number = decoded.id;
        return userId;
      }
    } catch (error) {
      throw error;
    }
  }

  throw new Error("Проблема с доступом");
};

/* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
