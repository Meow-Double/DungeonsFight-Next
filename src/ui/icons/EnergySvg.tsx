import type { ComponentPropsWithRef } from "react";

export const EnergySvg = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      {...props}
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.07896 0.720759C4.24096 0.282297 4.60196 0 5.00196 0H12.979C13.729 0 14.218 0.949 13.882 1.75625L11.613 7.20759H14.971C15.871 7.20759 16.321 8.51457 15.685 9.27857L3.73196 23.6373C2.97796 24.5431 1.72196 23.6109 2.05996 22.3964L4.60796 13.2139H1.00996C0.841707 13.2139 0.676119 13.1634 0.528238 13.067C0.380357 12.9706 0.25487 12.8313 0.163172 12.6619C0.0714753 12.4924 0.0164741 12.2981 0.00316496 12.0966C-0.0101442 11.8951 0.0186603 11.6928 0.0869619 11.5081L4.07896 0.720759Z"
        fill="#FF4646"
      />
    </svg>
  );
};
