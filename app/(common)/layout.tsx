import { Footer } from "@/src/components";
import { CommonHeader } from "@/src/components/Header";

import styles from "./layout.module.css";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.wrapper}>
      <CommonHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
