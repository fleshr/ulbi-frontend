import { getUserData, logout } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button } from "@/shared/ui";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation("translation", { keyPrefix: "Navbar" });
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
      <div id="Navbar" className={classNames(styles.navbar, {}, [className])}>
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
    <div id="Navbar" className={classNames(styles.navbar, {}, [className])}>
      <div></div>
      <div className={styles.links}>
        <Button data-testid="Navbar.LoginBtn" onClick={openAuthModal}>
          {t("Войти")}
        </Button>
        <LoginModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      </div>
    </div>
  );
});
