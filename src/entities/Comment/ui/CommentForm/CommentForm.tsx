import { classNames } from "@/shared/lib";
import { Button, HStack, Input } from "@/shared/ui";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CommentForm.module.scss";

interface CommentFormProps {
  className?: string;
  onCommentSend: (text: string) => void;
}

export const CommentForm = memo(function AddCommentsForm({
  className,
  onCommentSend,
}: CommentFormProps) {
  const [text, setText] = useState("");
  const { t } = useTranslation("translation", { keyPrefix: "CommentForm" });

  const handleSendComment = useCallback(() => {
    setText("");
    onCommentSend(text);
  }, [onCommentSend, text]);

  return (
    <HStack
      data-testid="CommentForm"
      gap={16}
      className={classNames(styles.form, {}, [className])}
    >
      <Input
        data-testid="CommentForm.Input"
        onChange={setText}
        value={text}
        placeholder={t("Комментарий")}
      />
      <Button
        data-testid="CommentForm.SendButton"
        variant="filled"
        onClick={handleSendComment}
      >
        {t("Отправить")}
      </Button>
    </HStack>
  );
});
