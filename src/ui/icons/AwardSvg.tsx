import type { ComponentPropsWithRef } from "react";

export const AwardSvg = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L14.5035 1.296L17.2905 1.719L18.5535 4.239L20.559 6.219L20.1 9L20.559 11.781L18.5535 13.761L17.2905 16.281L14.5035 16.704L12 18L9.49654 16.704L6.70954 16.281L5.44654 13.761L3.44104 11.781L3.90004 9L3.44104 6.219L5.44654 4.239L6.70954 1.719L9.49654 1.296L12 0Z"
        fill="#CAC8C8"
      />
      <path
        d="M6 17.691V24L12 22.5L18 24V17.691L14.973 18.15L12 19.689L9.027 18.15L6 17.691Z"
        fill="#CAC8C8"
      />
    </svg>
  );
};
