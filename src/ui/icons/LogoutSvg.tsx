import type { ComponentPropsWithRef } from "react";

export const LogoutSvg = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm10-6l5-4l-5-4v3H9v2h6z"
      />
    </svg>
  );
};
