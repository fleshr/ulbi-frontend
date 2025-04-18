import { classNames } from "@/shared/lib";
import { FC, useCallback, useState } from "react";
import styles from "./Navbar.module.scss";
import { Button } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { LoginModal } from "@/features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const [isAuthModelOpen, setIsAuthModelOpen] = useState(false);

  const openAuthModal = useCallback(() => {
    setIsAuthModelOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModelOpen(false);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
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
