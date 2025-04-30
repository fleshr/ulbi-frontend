import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { classNames } from "@/shared/lib";
import type { DataTestId } from "@/shared/types";
import { Avatar, HStack, Input, PageLoader, VStack } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Profile } from "../../model/types/profile";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps extends DataTestId {
  className?: string;
  profile?: Profile;
  readOnly: boolean;
  isLoading: boolean;
  onFirstnameChange?: (value: string) => void;
  onLastnameChange?: (value: string) => void;
  onAgeChange?: (value: string) => void;
  onCityChange?: (value: string) => void;
  onUsernameChange?: (value: string) => void;
  onAvatarChange?: (value: string) => void;
  onCurrencyChange?: (value: string) => void;
  onCountryChange?: (value: string) => void;
}

export const ProfileCard = memo(function ProfileCard({
  className,
  profile,
  readOnly,
  isLoading,
  onFirstnameChange,
  onLastnameChange,
  onAgeChange,
  onCityChange,
  onUsernameChange,
  onAvatarChange,
  onCurrencyChange,
  onCountryChange,
  "data-testid": dataTestId = "ProfileCard",
}: ProfileCardProps) {
  const { t } = useTranslation("profilePage", { keyPrefix: "ProfileCard" });

  if (isLoading) {
    return (
      <div
        data-testid={`${dataTestId}.Loader`}
        className={classNames(styles.profileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <PageLoader />
      </div>
    );
  }

  return (
    <VStack
      gap={16}
      data-testid={dataTestId}
      className={classNames(styles.profileCard, {}, [className])}
    >
      <VStack gap={8}>
        <HStack justify="center">
          <Avatar src={profile?.avatar} size={100} />
        </HStack>
        <Input
          data-testid={`${dataTestId}.Firstname`}
          readOnly={readOnly || isLoading}
          label={t("Имя")}
          value={profile?.first}
          onChange={onFirstnameChange}
        />
        <Input
          data-testid={`${dataTestId}.Lastname`}
          readOnly={readOnly || isLoading}
          label={t("Фамилия")}
          value={profile?.lastname}
          onChange={onLastnameChange}
        />
        <Input
          readOnly={readOnly || isLoading}
          label={t("Возраст")}
          type="number"
          value={String(profile?.age)}
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
      </VStack>
    </VStack>
  );
});
