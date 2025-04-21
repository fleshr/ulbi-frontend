import {
  fetchProfileData,
  ProfileCard,
  profileSelectors,
  ValidateError,
} from "@/entities/Profile";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text } from "@/shared/ui";
import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import styles from "./ProfilePage.module.scss";

export const ProfilePage: FC = memo(function ProfilePage() {
  const dispatch = useAppDispatch();
  const validateErrors = useAppSelector(profileSelectors.getValidateErrors);
  const { t } = useTranslation("profilePage");

  const errorMessage = {
    [ValidateError.SERVER_ERROR]: t("Произошла ошибка"),
    [ValidateError.NO_DATA]: t("Данные не получены"),
    [ValidateError.INCORRECT_USER_DATA]: t("Некорректные данные"),
    [ValidateError.INCORRECT_AGE]: t("Некорректный возраст"),
  };

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={styles.profilePage}>
      <ProfileHeader />
      {validateErrors &&
        validateErrors.length > 0 &&
        validateErrors.map((error) => (
          <Text key={error} text={errorMessage[error]} variant="error" />
        ))}
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
