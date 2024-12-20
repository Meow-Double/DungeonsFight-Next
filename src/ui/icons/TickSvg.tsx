import type { ComponentPropsWithRef } from "react";

export const TickSvg = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m2.75 8.75l3.5 3.5l7-7.5"
      />
    </svg>
  );
};
