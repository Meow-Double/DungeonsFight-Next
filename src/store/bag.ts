"use client";

import { create } from "zustand";

interface BagTypes {
  bag: BagItems | [];
  setBag: (values: BagItems | []) => void;
}

export const useBag = create<BagTypes>((set) => ({
  bag: [],
  setBag: (values) => set(() => ({ bag: values })),
}));
