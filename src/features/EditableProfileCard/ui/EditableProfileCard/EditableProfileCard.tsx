import { Profile, ProfileCard } from "@/entities/Profile";
import { useInitialEffect } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text, VStack } from "@/shared/ui";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { fetchProfileData } from "../../model/services/fetchProfileData";
import {
  profileFormActions,
  profileFormSelectors,
} from "../../model/slices/profileFormSlice";
import { ValidateError } from "../../model/types/profileForm";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface EditableProfileCardProps {
  className?: string;
  profileId: string;
}

export const EditableProfileCard = memo(function EditableProfileCard({
  className,
  profileId,
}: EditableProfileCardProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("profilePage");
  const validateErrors = useAppSelector(profileFormSelectors.getValidateErrors);
  const profile = useAppSelector(profileFormSelectors.getForm);
  const isLoading = useAppSelector(profileFormSelectors.getIsLoading);
  const readOnly = useAppSelector(profileFormSelectors.getReadOnly);

  const errorMessage = {
    [ValidateError.SERVER_ERROR]: t("Произошла ошибка"),
    [ValidateError.NO_DATA]: t("Данные не получены"),
    [ValidateError.INCORRECT_USER_DATA]: t("Некорректные данные"),
    [ValidateError.INCORRECT_AGE]: t("Некорректный возраст"),
  };

  useInitialEffect(() => {
    if (profileId) {
      void dispatch(fetchProfileData(profileId));
    }
  });

  const onFirstnameChange = useCallback(
    (value: string) => {
      dispatch(profileFormActions.updateProfile({ first: value } as Profile));
    },
    [dispatch],
  );

  const onLastnameChange = useCallback(
    (value: string) => {
      dispatch(
        profileFormActions.updateProfile({ lastname: value } as Profile),
      );
    },
    [dispatch],
  );

  const onAgeChange = useCallback(
    (value: string) => {
      dispatch(
        profileFormActions.updateProfile({ age: Number(value) } as Profile),
      );
    },
    [dispatch],
  );

  const onCityChange = useCallback(
    (value: string) => {
      dispatch(profileFormActions.updateProfile({ city: value } as Profile));
    },
    [dispatch],
  );

  const onUsernameChange = useCallback(
    (value: string) => {
      dispatch(
        profileFormActions.updateProfile({ username: value } as Profile),
      );
    },
    [dispatch],
  );

  const onAvatarChange = useCallback(
    (value: string) => {
      dispatch(profileFormActions.updateProfile({ avatar: value } as Profile));
    },
    [dispatch],
  );

  const onCurrencyChange = useCallback(
    (value: string) => {
      dispatch(
        profileFormActions.updateProfile({ currency: value } as Profile),
      );
    },
    [dispatch],
  );

  const onCountryChange = useCallback(
    (value: string) => {
      dispatch(profileFormActions.updateProfile({ country: value } as Profile));
    },
    [dispatch],
  );

  return (
    <VStack className={className} gap={16}>
      <EditableProfileCardHeader />
      <VStack gap={4}>
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
    </VStack>
  );
});
