"use client";

import { create } from "zustand";

// interface BagItemTypes {
//   id: number;
//   quantity: number;
//   image: string;
//   title: string;
//   price: number;
// }

interface BagTypes {
  bag: BagItemTypes[];
  setBag: (values: BagItemTypes[]) => void;
  addBagItem: (values: BagItemTypes) => void;
}

export const useBag = create<BagTypes>((set) => ({
  bag: [],
  setBag: (values) => set(() => ({ bag: values })),
  addBagItem: (values) =>
    set((state) => {
      const itemIdx = state.bag.findIndex((item) => item.id === values.id);
      if (itemIdx >= 0) {
        const newBag = state.bag.map((item) =>
          item.id === state.bag[itemIdx].id
            ? { ...item, quantity: item.quantity + values.quantity }
            : item
        );
        return {
          bag: newBag,
        };
      } else {
        return {
          bag: [...state.bag, values],
        };
      }
    }),
}));
