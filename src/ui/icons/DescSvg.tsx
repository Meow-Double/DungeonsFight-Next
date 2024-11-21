import type { ComponentPropsWithRef } from "react";

export const DescSvg = (props: ComponentPropsWithRef<"svg">) => {
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
        d="M2.99999 17H15C15.2549 17.0003 15.5 17.0979 15.6854 17.2728C15.8707 17.4478 15.9822 17.687 15.9972 17.9414C16.0121 18.1958 15.9293 18.4464 15.7657 18.6418C15.6021 18.8373 15.3701 18.9629 15.117 18.993L15 19H2.99999C2.74511 18.9997 2.49996 18.9021 2.31462 18.7272C2.12929 18.5522 2.01776 18.313 2.00282 18.0586C1.98788 17.8042 2.07067 17.5536 2.23426 17.3582C2.39785 17.1627 2.62989 17.0371 2.88299 17.007L2.99999 17ZM2.99999 13H21C21.2549 13.0003 21.5 13.0979 21.6854 13.2728C21.8707 13.4478 21.9822 13.687 21.9972 13.9414C22.0121 14.1958 21.9293 14.4464 21.7657 14.6418C21.6021 14.8373 21.3701 14.9629 21.117 14.993L21 15H2.99999C2.74511 14.9997 2.49996 14.9021 2.31462 14.7272C2.12929 14.5522 2.01776 14.313 2.00282 14.0586C1.98788 13.8042 2.07067 13.5536 2.23426 13.3582C2.39785 13.1627 2.62989 13.0371 2.88299 13.007L2.99999 13ZM2.99999 9H21C21.2549 9.00028 21.5 9.09788 21.6854 9.27285C21.8707 9.44782 21.9822 9.68695 21.9972 9.94139C22.0121 10.1958 21.9293 10.4464 21.7657 10.6418C21.6021 10.8373 21.3701 10.9629 21.117 10.993L21 11H2.99999C2.74511 10.9997 2.49996 10.9021 2.31462 10.7272C2.12929 10.5522 2.01776 10.313 2.00282 10.0586C1.98788 9.80416 2.07067 9.55362 2.23426 9.35817C2.39785 9.16271 2.62989 9.0371 2.88299 9.007L2.99999 9ZM2.99999 5H21C21.2549 5.00028 21.5 5.09788 21.6854 5.27285C21.8707 5.44782 21.9822 5.68695 21.9972 5.94139C22.0121 6.19584 21.9293 6.44638 21.7657 6.64183C21.6021 6.83729 21.3701 6.9629 21.117 6.993L21 7H2.99999C2.74511 6.99972 2.49996 6.90212 2.31462 6.72715C2.12929 6.55218 2.01776 6.31305 2.00282 6.05861C1.98788 5.80416 2.07067 5.55362 2.23426 5.35817C2.39785 5.16271 2.62989 5.0371 2.88299 5.007L2.99999 5Z"
        fill="#CAC8C8"
      />
    </svg>
  );
};
