import type { Metadata } from "next";

import { Footer, Header } from "@/src/components";

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
