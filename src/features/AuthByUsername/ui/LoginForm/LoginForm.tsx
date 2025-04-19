import { FC, useCallback } from "react";
import { classNames } from "@/shared/lib";
import styles from "./LoginForm.module.scss";
import { Button, Input, Text } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { getUserData } from "../../model/selectors/getUserData";
import { setPassword, setUsername } from "../../model/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useAppSelector(getUserData);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(setUsername(value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(() => {
    void dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <div>
        <Text title={t("Форма авторизации")} />
        {error && <Text text={error} variant="error" />}
      </div>
      <Input
        disabled={isLoading}
        value={username}
        onChange={handleUsernameChange}
        placeholder={t("Имя пользователя")}
      />
      <Input
        disabled={isLoading}
        value={password}
        onChange={handlePasswordChange}
        placeholder={t("Пароль")}
      />
      <Button
        onClick={handleSubmit}
        disabled={isLoading}
        data-testid="LoginForm.LoginBtn"
        variant="filled"
        className={styles.loginBtn}
      >
        {t("Войти")}
      </Button>
    </div>
  );
};
