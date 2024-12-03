"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { useAuth } from "../store";
import { trpc } from "../utils/hooks";

interface StaminaProviderProps {
  children: ReactNode;
}
export const StaminaProvider = ({ children }: StaminaProviderProps) => {
  const [timer, setTimer] = useState(60);
  const user = useAuth((state) => state.user);
  const updateEnergy = useAuth((state) => state.updateEnergy);
  const { data } = trpc.getStamina.useQuery(undefined, {
    enabled: !!user?.timeStamina,
    refetchInterval: timer * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!!data?.timeNextRequest) {
      setTimer(data?.timeNextRequest);
    }
    if (!!data?.energy) {
      updateEnergy(Number(data?.energy));
    }
  }, [data]);

  return <>{children}</>;
};
