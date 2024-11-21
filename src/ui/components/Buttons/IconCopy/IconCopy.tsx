"use client";

import type { ReactNode, RefObject } from "react";

interface IconCopyProps {
  icon: ReactNode;
  textRef: RefObject<HTMLElement>;
  className?: string;
}

export const IconCopy = ({ icon, textRef, className }: IconCopyProps) => {
  const copyText = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;
      const tempInput = document.createElement("textarea");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Текст скопирован!");
    }
  };

  return (
    <button className={className} onClick={copyText}>
      {icon}
    </button>
  );
};
