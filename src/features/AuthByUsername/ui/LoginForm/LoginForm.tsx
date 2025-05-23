import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, Input, Text, VStack } from "@/shared/ui";
import type { FC } from "react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  getLoginState,
  setPassword,
  setUsername,
} from "../../model/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation("translation", { keyPrefix: "LofinForm" });
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } =
    useAppSelector(getLoginState);

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
    <VStack gap={16} className={classNames(styles.loginForm, {}, [className])}>
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
    </VStack>
  );
};

export default LoginForm;
