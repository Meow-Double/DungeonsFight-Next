"use client";

import { create } from "zustand";

interface User extends UserTypes {
  token: string;
}

interface UseAuthTypes {
  user: Partial<User> | null;
  setUser: (values: Partial<User> | null) => void;
  updateEnergy: (energy: number) => void;
  updateMoney: (money: number) => void;
}

export const useAuth = create<UseAuthTypes>((set) => ({
  user: null,
  setUser: (values) => set(() => ({ user: values })),
  updateEnergy: (energy) =>
    set((state) => {
      if (!state.user) {
        throw new Error("Пользователь не найден");
      }

      return {
        user: {
          ...state.user,
          energy: energy,
        },
      };
    }),
  updateMoney: (money) =>
    set((state) => {
      if (!state.user) {
        throw new Error("Пользователь не найден");
      }

      return {
        user: {
          ...state.user,
          money: money,
        },
      };
    }),
}));
