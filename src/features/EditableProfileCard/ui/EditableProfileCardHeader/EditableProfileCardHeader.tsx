import { userSelectors } from "@/entities/User";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import type { DataTestId } from "@/shared/types";
import { Button, HStack, Text } from "@/shared/ui";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { profileFormSelectors } from "../../model/selectors/profileFormSelectors";
import { updateProfileData } from "../../model/services/updateProfileData";
import { profileFormActions } from "../../model/slices/profileFormSlice";

interface EditableProfileCardHeaderProps extends DataTestId {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  function EditableProfileCardHeader({
    className,
    "data-testid": dataTestId = "EditableProfileCardHeader",
  }: EditableProfileCardHeaderProps) {
    const { t } = useTranslation("profilePage", { keyPrefix: "ProfileHeader" });
    const readOnly = useAppSelector(profileFormSelectors.getReadOnly);
    const isLoading = useAppSelector(profileFormSelectors.getIsLoading);
    const dispatch = useAppDispatch();

    const profile = useAppSelector(profileFormSelectors.getForm);
    const user = useAppSelector(userSelectors.getUserData);
    const canEdit = profile?.id === user?.id;

    const onEdit = useCallback(() => {
      dispatch(profileFormActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
      void dispatch(updateProfileData());
    }, [dispatch]);

    const onCancel = useCallback(() => {
      dispatch(profileFormActions.cancelEdit());
    }, [dispatch]);

    const buttons = useMemo(() => {
      return readOnly ? (
        <Button
          data-testid={`${dataTestId}.EditButton`}
          disabled={isLoading}
          onClick={onEdit}
          variant="filled"
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            data-testid={`${dataTestId}.SaveButton`}
            disabled={isLoading}
            onClick={onSave}
            variant="filled"
          >
            {t("Сохранить")}
          </Button>
          <Button
            data-testid={`${dataTestId}.CancelButton`}
            disabled={isLoading}
            onClick={onCancel}
            variant="filled"
          >
            {t("Отменить")}
          </Button>
        </>
      );
    }, [readOnly, dataTestId, isLoading, onEdit, t, onSave, onCancel]);

    return (
      <HStack data-testid={dataTestId} justify="between" className={className}>
        <Text title={t("Профиль")} />
        {canEdit && <HStack gap={8}>{buttons}</HStack>}
      </HStack>
    );
  },
);
