import type { ComponentPropsWithRef, ReactNode } from "react";
import clsx from "clsx";

type TypographyVariant = "title20_bold" | "text16_regular";

type TypographyTag = "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyProps<Tag extends TypographyTag> = ComponentPropsWithRef<Tag> & {
  variant: TypographyVariant;
  tag: TypographyTag;
  children: ReactNode;
};

export const Typography = <Tag extends TypographyTag = "div">({
  variant,
  tag = "div",
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const TypographyComponent = tag;
  return (
    <TypographyComponent className={clsx(variant, className)} {...props}>
      {children}
    </TypographyComponent>
  );
};
