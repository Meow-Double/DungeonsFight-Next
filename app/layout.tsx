import { AuthProvider } from "@/src/providers";
import { TRPCProvider } from "@/src/utils/hooks";

import "../styles/index.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <AuthProvider>{children}</AuthProvider>
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;
