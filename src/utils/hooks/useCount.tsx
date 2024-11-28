"use client";

import { useCallback, useState } from "react";

export const useCount = (defaultCount: number = 0) => {
  const [count, setCount] = useState(defaultCount);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const dicrement = useCallback(() => setCount((prev) => prev - 1), []);

  return {
    count,
    increment,
    dicrement,
    setCount,
  };
};
