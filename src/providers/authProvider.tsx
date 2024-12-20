"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

import { trpc } from "@/src/utils/hooks";

import { useAuth } from "../store";
import { useBag } from "../store/bag";
import { ROUTES } from "../utils/constants";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = typeof window !== "undefined" ? Cookies.get("token") : null;

  const { setUser, user } = useAuth();
  const setBag = useBag((state) => state.setBag);

  const { data } = trpc.getMe.useQuery(undefined, {
    enabled: !!token && !user,
    retry: false,
    staleTime: 200000,
  });

  const pathname = usePathname();

  useEffect(() => {
    if (data) {
      setUser({ ...data.user, token: token ?? "" });
      setBag(data.bag);
    }
  }, [data]);

  useEffect(() => {
    if ((user && pathname === ROUTES.LOGIN) || pathname === ROUTES.REGISTER) {
      setUser(null);
      setBag([]);
      Cookies.remove("token");
    }
  }, [pathname]);

  return <>{children}</>;
};
