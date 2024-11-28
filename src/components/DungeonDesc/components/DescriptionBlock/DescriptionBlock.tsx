"use client";

import { useRef } from "react";

import { IconCopy, Typography } from "@/src/ui/components";
import { DescSvg } from "@/src/ui/icons";

import styles from "./DescriptionBlock.module.css";

interface DescriptionBlockProps {
  desc: string;
}

export const DescriptionBlock = ({ desc }: DescriptionBlockProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <IconCopy className={styles.icon} icon={<DescSvg />} textRef={textRef} />
      <div>
        <Typography tag="h2" variant="title20_bold" className={styles.title}>
          Описание:
        </Typography>
        <p className={styles.text} ref={textRef}>
          {desc}
        </p>
      </div>
    </>
  );
};
