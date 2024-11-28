"use client";

import { create } from "zustand";

interface BagTypes {
  sellItem: null | BagItemTypes;
  setSellItem: (values: BagItemTypes | null) => void;
}

export const useSellItem = create<BagTypes>((set) => ({
  sellItem: null,
  setSellItem: (values) => set(() => ({ sellItem: values })),
}));
