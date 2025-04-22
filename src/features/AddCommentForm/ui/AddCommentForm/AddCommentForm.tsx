import { classNames } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, Input } from "@/shared/ui";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  addCommentFormActions,
  addCommentFormSelectors,
} from "../../model/addCommentFormSlice";
import styles from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
  className?: string;
  onSendComment?: (text: string) => void;
}

export const AddCommentForm = memo(function AddCommentsForm({
  className,
  onSendComment,
}: AddCommentFormProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation", { keyPrefix: "AddCommentForm" });
  const text = useAppSelector(addCommentFormSelectors.getText);

  const handleSendComment = useCallback(() => {
    onSendComment?.(text);
    dispatch(addCommentFormActions.setText(""));
  }, [dispatch, onSendComment, text]);

  const handleTextChange = useCallback(
    (text: string) => {
      dispatch(addCommentFormActions.setText(text));
    },
    [dispatch],
  );

  return (
    <div className={classNames(styles.form, {}, [className])}>
      <Input
        onChange={handleTextChange}
        value={text}
        placeholder={t("Комментарий")}
      />
      <Button variant="filled" onClick={handleSendComment}>
        {t("Отправить")}
      </Button>
    </div>
  );
});
