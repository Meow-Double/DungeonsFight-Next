import { Button, Checkbox, Input, Typography } from "@/src/ui/components";

import styles from "../Form.module.css";

interface RegisterFormProps {
  setIsOpen: () => void;
}
export const RegisterForm = ({ setIsOpen }: RegisterFormProps) => {
  return (
    <form className={styles.form}>
      <Typography variant="title20_bold">Регестрация</Typography>
      <div className={styles.inputs}>
        <Input
          variant="primary"
          label="Введите никнейм"
          placeholder="user"
          component="input"
        />
        <Input
          variant="primary"
          label="Введите почту"
          placeholder="user@gmail.com..."
          component="input"
          type="email"
        />
        <Input
          variant="primary"
          label="Введите пароль"
          placeholder="8e1G2rYp4..."
          type="password"
          component="input"
        />
        <Input
          variant="primary"
          label="Повторите пароль"
          placeholder="8e1G2rYp4..."
          type="password"
          component="input"
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
      <Button variant="accent">Создать аккаунт</Button>
    </form>
  );
};
