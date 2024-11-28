"use client";

import { useState } from "react";
import Link from "next/link";

import { PolicyConditionModal, RegisterForm } from "@/src/components/Auth";
import { ArrowSvg } from "@/src/ui/icons";
import { ROUTES } from "@/src/utils/constants";

import styles from "./page.module.css";

const RegisterPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.inner}>
        <Link href={ROUTES.LOGIN} className={styles.login_link}>
          <span>Войти в аккаунт</span>
          <ArrowSvg className={styles.arrow} />
        </Link>
        <RegisterForm setIsOpen={() => setIsOpen(true)} />
      </div>

      {isOpen && (
        <PolicyConditionModal
          isOpen={isOpen}
          setIsOpen={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default RegisterPage;
