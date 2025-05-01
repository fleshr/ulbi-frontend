import { userSelectors } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { NotificationsButton } from "@/features/NotificationsButton";
import { UserAvatarDropdown } from "@/features/UserAvatarDropdown";
import { classNames } from "@/shared/lib";
import { useAppSelector } from "@/shared/model";
import { Button, HStack } from "@/shared/ui";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation("translation", { keyPrefix: "Navbar" });
  const [isAuthModelOpen, setIsAuthModelOpen] = useState(false);
  const user = useAppSelector(userSelectors.getUserData);

  const openAuthModal = useCallback(() => {
    setIsAuthModelOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModelOpen(false);
  }, []);

  if (user) {
    return (
      <HStack
        justify="between"
        className={classNames(styles.navbar, {}, [className])}
      >
        <div></div>
        <HStack gap={16}>
          <NotificationsButton />
          <UserAvatarDropdown />
        </HStack>
      </HStack>
    );
  }

  return (
    <HStack
      justify="between"
      className={classNames(styles.navbar, {}, [className])}
    >
      <div></div>
      <HStack gap={8}>
        <Button data-testid="Navbar.LoginBtn" onClick={openAuthModal}>
          {t("Войти")}
        </Button>
        <LoginModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      </HStack>
    </HStack>
  );
});
