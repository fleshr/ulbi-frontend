import { userActions, userSelectors, getIsUserAdmin } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { RoutePath } from "@/shared/config";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Avatar, Button, Dropdown, HStack } from "@/shared/ui";
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
  const isAdmin = useAppSelector(getIsUserAdmin);
  const dispatch = useAppDispatch();

  const openAuthModal = useCallback(() => {
    setIsAuthModelOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModelOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (user) {
    return (
      <HStack
        justify="between"
        className={classNames(styles.navbar, {}, [className])}
      >
        <div></div>
        <Dropdown
          trigger={<Avatar size={30} src={user.avatar} />}
          items={[
            ...(isAdmin
              ? [
                  {
                    content: t("Панель администратора"),
                    href: RoutePath.admin_panel,
                  },
                ]
              : []),
            { content: t("Профиль"), href: `${RoutePath.profile}/${user.id}` },
            { content: t("Выйти"), onClick: handleLogout },
          ]}
        />
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
