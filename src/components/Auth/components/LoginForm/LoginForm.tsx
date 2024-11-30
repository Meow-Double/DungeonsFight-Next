"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

import { useAuth } from "@/src/store";
import { Button, Input, Typography } from "@/src/ui/components";
import { ROUTES } from "@/src/utils/constants";
import { trpc } from "@/src/utils/hooks";

import type { LoginSchema } from "../../constants/loginSchema";
import { loginSchema } from "../../constants/loginSchema";

import styles from "../Form.module.css";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const setUser = useAuth((state) => state.setUser);
  const router = useRouter();

  const { mutate, data, error } = trpc.login.useMutation({});

  useEffect(() => {
    if (error) {
      alert("Ошибка входа");
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setUser(data);
      Cookies.set("token", data.token);
      // localStorage.setItem("token", data.token);
      router.replace(ROUTES.MAIN);
    }
  }, [data]);

  const onSubmit = (values: LoginSchema): void => {
    mutate(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography tag="h3" variant="title20_bold">
        Вход
      </Typography>
      <div className={styles.inputs}>
        <Input
          variant="primary"
          label="Введите почту"
          placeholder="user@gmail.com..."
          type="email"
          component="input"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          variant="primary"
          label="Введите пароль"
          placeholder="8e1G2rYp4..."
          type="password"
          component="input"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      <Button type="submit" variant="accent">
        Войти в аккаунт
      </Button>
    </form>
  );
};
