import type { ComponentPropsWithRef } from "react";

export const ShopSvg = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14H3V10H9M18 10V8L17 3H1L0 8V10H1V16H11V10H15V16H17V10M17 0H1V2H17V0Z"
        fill="white"
      />
    </svg>
  );
};
