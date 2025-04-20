import { memo } from "react";
import { useTranslation } from "react-i18next";

export const ProfilePage = memo(function ProfilePage() {
  const { t } = useTranslation("profilePage");

  return <div>{t("Профиль")}</div>;
});

export default ProfilePage;
