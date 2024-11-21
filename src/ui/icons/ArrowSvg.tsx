import type { ComponentPropsWithRef } from "react";

export const ArrowSvg = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      {...props}
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4 7L0.833599 6.4336L0.268799 7L0.833599 7.5664L1.4 7ZM1.9664 7.5664L8.3664 1.1664L7.2336 0.0335999L0.833599 6.4336L1.9664 7.5664ZM0.833599 7.5664L7.2336 13.9664L8.3664 12.8336L1.9664 6.4336L0.833599 7.5664ZM1.4 7.8L21.4 7.8V6.2L1.4 6.2V7.8Z"
        fill="white"
      />
    </svg>
  );
};
