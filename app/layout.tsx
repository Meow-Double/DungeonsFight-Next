import { AuthProvider, StaminaProvider } from "@/src/providers";
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
        <div id="modal" />
        <TRPCProvider>
          <AuthProvider>
            <StaminaProvider>{children}</StaminaProvider>
          </AuthProvider>
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;
