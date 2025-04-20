import { classNames } from "@/shared/lib";
import { useAppSelector } from "@/shared/model";
import { Button, Input, Text } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { getProfileData } from "../../model/profileSlice";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(function ProfileCard({
  className,
}: ProfileCardProps) {
  const { t } = useTranslation("profilePage", { keyPrefix: "ProfileCard" });
  const profile = useAppSelector(getProfileData);

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.title}>
        <Text title={t("Профиль")} />
        <Button variant="filled">{t("Редактировать")}</Button>
      </div>
      <div className={styles.inputs}>
        <Input label={t("Имя")} value={profile?.first} />
        <Input label={t("Фамилия")} value={profile?.lastname} />
      </div>
    </div>
  );
});
