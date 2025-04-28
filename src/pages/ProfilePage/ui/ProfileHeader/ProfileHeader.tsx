import {
  profileActions,
  profileSelectors,
  updateProfileData,
} from "@/entities/Profile";
import { userSelectors } from "@/entities/User";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, HStack, Text } from "@/shared/ui";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader = memo(function ProfileHeader({
  className,
}: ProfileHeaderProps) {
  const { t } = useTranslation("profilePage", { keyPrefix: "ProfileHeader" });
  const readOnly = useAppSelector(profileSelectors.getReadOnly);
  const isLoading = useAppSelector(profileSelectors.getIsLoading);
  const dispatch = useAppDispatch();

  const profile = useAppSelector(profileSelectors.getForm);
  const user = useAppSelector(userSelectors.getUserData);
  const canEdit = profile?.id === user?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSave = useCallback(() => {
    void dispatch(updateProfileData());
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const buttons = useMemo(() => {
    return readOnly ? (
      <Button disabled={isLoading} onClick={onEdit} variant="filled">
        {t("Редактировать")}
      </Button>
    ) : (
      <>
        <Button disabled={isLoading} onClick={onSave} variant="filled">
          {t("Сохранить")}
        </Button>
        <Button disabled={isLoading} onClick={onCancel} variant="filled">
          {t("Отменить")}
        </Button>
      </>
    );
  }, [onCancel, onEdit, onSave, readOnly, t, isLoading]);

  return (
    <HStack justify="between" className={className}>
      <Text title={t("Профиль")} />
      {canEdit && <HStack gap={8}>{buttons}</HStack>}
    </HStack>
  );
});
