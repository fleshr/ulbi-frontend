import { classNames } from "@/shared/lib";
import { memo, useCallback } from "react";
import CopyIcon from "../../assets/icons/copy.svg";
import { Button } from "../Button/Button";
import styles from "./Code.module.scss";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code({ className, text }: CodeProps) {
  const handleCopyClick = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.codeWrapper, {}, [className])}>
      <Button onClick={handleCopyClick} className={styles.copyBtn}>
        <CopyIcon />
      </Button>
      <code className={styles.code}>{text}</code>
    </pre>
  );
});
