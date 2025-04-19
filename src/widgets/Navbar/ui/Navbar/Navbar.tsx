import { classNames } from "@/shared/lib";
import { FC, useCallback, useState } from "react";
import styles from "./Navbar.module.scss";
import { Button } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { LoginModal } from "@/features/AuthByUsername";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { getUserData, logout } from "@/entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const [isAuthModelOpen, setIsAuthModelOpen] = useState(false);
  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  const openAuthModal = useCallback(() => {
    setIsAuthModelOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModelOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (user) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <div></div>
        <div className={styles.links}>
          <span>{user.username}</span>
          <Button data-testid="Navbar.LoginBtn" onClick={handleLogout}>
            {t("Выйти")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div></div>
      <div className={styles.links}>
        <Button data-testid="Navbar.LoginBtn" onClick={openAuthModal}>
          {t("Войти")}
        </Button>
        <LoginModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      </div>
    </div>
  );
};
