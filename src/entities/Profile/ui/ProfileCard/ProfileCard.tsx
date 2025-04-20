import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Avatar, Input } from "@/shared/ui";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { profileActions, profileSelectors } from "../../model/profileSlice";
import { Profile } from "../../model/types";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(function ProfileCard({
  className,
}: ProfileCardProps) {
  const { t } = useTranslation("profilePage", { keyPrefix: "ProfileCard" });
  const profile = useAppSelector(profileSelectors.getForm);
  const readOnly = useAppSelector(profileSelectors.getReadOnly);
  const isLoading = useAppSelector(profileSelectors.getIsLoading);
  const dispatch = useAppDispatch();

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
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.inputs}>
        <div className={styles.avatar}>
          <Avatar src={profile?.avatar} size={100} />
        </div>

        <Input
          readOnly={readOnly || isLoading}
          label={t("Имя")}
          value={profile?.first}
          onChange={onFirstnameChange}
        />
        <Input
          readOnly={readOnly || isLoading}
          label={t("Фамилия")}
          value={profile?.lastname}
          onChange={onLastnameChange}
        />
        <Input
          readOnly={readOnly || isLoading}
          label={t("Возраст")}
          type="number"
          value={String(profile?.age ?? "")}
          onChange={onAgeChange}
        />
        <Input
          readOnly={readOnly || isLoading}
          label={t("Город")}
          value={profile?.city}
          onChange={onCityChange}
        />
        <Input
          readOnly={readOnly || isLoading}
          label={t("Никнейм")}
          value={profile?.username}
          onChange={onUsernameChange}
        />
        <Input
          readOnly={readOnly || isLoading}
          label={t("Аватар")}
          value={profile?.avatar}
          onChange={onAvatarChange}
        />
        <CurrencySelect
          disabled={readOnly || isLoading}
          value={profile?.currency}
          onChange={onCurrencyChange}
        />
        <CountrySelect
          disabled={readOnly || isLoading}
          value={profile?.country}
          onChange={onCountryChange}
        />
      </div>
    </div>
  );
});
