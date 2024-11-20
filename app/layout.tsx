import type { Metadata } from "next";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "Dungeons Fight",
  description: "App for fun gaming!",
  icons: "logo.svg",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
