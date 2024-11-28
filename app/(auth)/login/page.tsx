import Link from "next/link";

import { LoginForm } from "@/src/components/Auth";
import { ArrowSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils/constants";

import styles from "./page.module.css";

const LoginPage = () => {
  return (
    <div className={styles.inner}>
      <Link href={ROUTES.REGISTER} className={styles.login_link}>
        <span>Создать аккаунт</span>
        <ArrowSvg className={styles.arrow} />
      </Link>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
