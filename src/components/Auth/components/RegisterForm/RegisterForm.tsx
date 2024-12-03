"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

import { useAuth } from "@/src/store";
import {
  Alert,
  Button,
  Checkbox,
  Input,
  Typography,
} from "@/src/ui/components";
import { ROUTES } from "@/src/utils/constants";
import { trpc } from "@/src/utils/hooks";

import type { RegisterSchema } from "../../constants/registerSchema";
import { registerSchema } from "../../constants/registerSchema";

import styles from "../Form.module.css";

interface RegisterFormProps {
  setIsOpen: () => void;
}
export const RegisterForm = ({ setIsOpen }: RegisterFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const setUser = useAuth((state) => state.setUser);

  const { mutate, error, data } = trpc.register.useMutation({});

  useEffect(() => {
    if (data) {
      setUser(data);
      // localStorage.setItem("token", data.token);
      Cookies.set("token", data.token);
      router.replace(ROUTES.MAIN);
    }
  }, [data]);

  const onSubmit = (values: RegisterSchema) => {
    mutate(values);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography tag="h3" variant="title20_bold">
          Регестрация
        </Typography>
        <div className={styles.inputs}>
          <Input
            variant="primary"
            label="Введите никнейм"
            placeholder="user"
            component="input"
            {...register("username")}
            error={errors.username?.message}
          />
          <Input
            variant="primary"
            label="Введите почту"
            placeholder="user@gmail.com..."
            component="input"
            type="email"
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
          <Input
            variant="primary"
            label="Повторите пароль"
            placeholder="8e1G2rYp4..."
            type="password"
            component="input"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div>
          <Checkbox
            label={
              <button
                type="button"
                onClick={setIsOpen}
                className={styles.policy_condition}
              >
                условие политики
              </button>
            }
          />
        </div>
        <Button type="submit" variant="accent">
          Создать аккаунт
        </Button>
      </form>
      {
        <Alert
          isOpen={!!error?.message}
          variant="default"
          timeClose={3000}
          type="error"
        >
          {error?.message}!
        </Alert>
      }
    </>
  );
};
