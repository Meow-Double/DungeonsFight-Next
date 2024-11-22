import { Button, Input, Typography } from "@/src/ui/components";

import styles from "../Form.module.css";

export const LoginForm = () => {
  return (
    <form className={styles.form}>
      <Typography variant="title20_bold">Вход</Typography>
      <div className={styles.inputs}>
        <Input
          variant="primary"
          label="Введите почту"
          placeholder="user@gmail.com..."
          type="email"
          component="input"
        />
        <Input
          variant="primary"
          label="Введите пароль"
          placeholder="8e1G2rYp4..."
          type="password"
          component="input"
        />
      </div>
      <Button variant="accent">Войти в аккаунт</Button>
    </form>
  );
};
