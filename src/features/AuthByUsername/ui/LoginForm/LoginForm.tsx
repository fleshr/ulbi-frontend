import { FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./LoginForm.module.scss";
import { Button, Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation("common");

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input placeholder={t("Имя пользователя")} />
      <Input placeholder={t("Пароль")} />
      <Button
        data-testid="LoginForm.LoginBtn"
        variant="filled"
        className={styles.loginBtn}
      >
        {t("Войти")}
      </Button>
    </div>
  );
};
