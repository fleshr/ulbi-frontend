import {
  fetchProfileData,
  Profile,
  profileActions,
  ProfileCard,
  profileSelectors,
  ValidateError,
} from "@/entities/Profile";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text, VStack } from "@/shared/ui";
import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";

export const ProfilePage: FC = memo(function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("profilePage");
  const dispatch = useAppDispatch();
  const validateErrors = useAppSelector(profileSelectors.getValidateErrors);
  const profile = useAppSelector(profileSelectors.getForm);
  const isLoading = useAppSelector(profileSelectors.getIsLoading);
  const readOnly = useAppSelector(profileSelectors.getReadOnly);

  const errorMessage = {
    [ValidateError.SERVER_ERROR]: t("Произошла ошибка"),
    [ValidateError.NO_DATA]: t("Данные не получены"),
    [ValidateError.INCORRECT_USER_DATA]: t("Некорректные данные"),
    [ValidateError.INCORRECT_AGE]: t("Некорректный возраст"),
  };

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      if (id) {
        void dispatch(fetchProfileData(id));
      }
    }
  }, [dispatch, id]);

  const onFirstnameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value } as Profile));
    },
    [dispatch],
  );

  const onLastnameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value } as Profile));
    },
    [dispatch],
  );

  const onAgeChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) } as Profile));
    },
    [dispatch],
  );

  const onCityChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value } as Profile));
    },
    [dispatch],
  );

  const onUsernameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value } as Profile));
    },
    [dispatch],
  );

  const onAvatarChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value } as Profile));
    },
    [dispatch],
  );

  const onCurrencyChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ currency: value } as Profile));
    },
    [dispatch],
  );

  const onCountryChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ country: value } as Profile));
    },
    [dispatch],
  );

  return (
    <VStack gap={16}>
      <ProfileHeader />
      {validateErrors &&
        validateErrors.length > 0 &&
        validateErrors.map((error) => (
          <Text key={error} text={errorMessage[error]} variant="error" />
        ))}
      <ProfileCard
        profile={profile}
        isLoading={isLoading}
        readOnly={readOnly}
        onFirstnameChange={onFirstnameChange}
        onLastnameChange={onLastnameChange}
        onAgeChange={onAgeChange}
        onCityChange={onCityChange}
        onUsernameChange={onUsernameChange}
        onAvatarChange={onAvatarChange}
        onCurrencyChange={onCurrencyChange}
        onCountryChange={onCountryChange}
      />
    </VStack>
  );
});

export default ProfilePage;
