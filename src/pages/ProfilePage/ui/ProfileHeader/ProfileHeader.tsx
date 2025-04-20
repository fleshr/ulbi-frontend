import {
  profileActions,
  profileSelectors,
  updateProfileData,
} from "@/entities/Profile";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, Text } from "@/shared/ui";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProfileHeader.module.scss";

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
    <div className={classNames(styles.profileHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      <div className={styles.buttons}>{buttons}</div>
    </div>
  );
});
