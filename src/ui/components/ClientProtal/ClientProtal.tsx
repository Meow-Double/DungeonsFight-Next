"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ClientPortalProps {
  children: ReactNode;
  selector: string;
}

export const ClientPortal = ({ children, selector }: ClientPortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (element instanceof HTMLElement) {
      setContainer(element);
      setMounted(true);
    }
  }, [selector]);

  return mounted && container ? createPortal(children, container) : null;
};
