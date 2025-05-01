import { getIsUserAdmin, userActions, userSelectors } from "@/entities/User";
import { RoutePath } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Avatar, Dropdown } from "@/shared/ui";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

interface UserAvatarDropdownProps {
  className?: string;
}

export const UserAvatarDropdown = memo(function UserAvatarDropdown({
  className,
}: UserAvatarDropdownProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation", { keyPrefix: "Navbar" });
  const user = useAppSelector(userSelectors.getUserData);
  const isAdmin = useAppSelector(getIsUserAdmin);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!user) {
    return null;
  }

  return (
    <Dropdown
      className={className}
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
        {
          content: t("Профиль"),
          href: `${RoutePath.profile}/${user.id}`,
        },
        { content: t("Выйти"), onClick: handleLogout },
      ]}
    />
  );
});
