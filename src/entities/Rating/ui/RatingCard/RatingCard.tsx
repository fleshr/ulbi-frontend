import {
  Button,
  Card,
  Drawer,
  HStack,
  Input,
  Modal,
  StarRating,
  Text,
  VStack,
} from "@/shared/ui";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

interface RatingCardProps {
  className?: string;
  title?: string;
  hasFeedback?: boolean;
  feedbackTitle?: string;
  onCancel?: (starNumber: number) => void;
  onAccept?: (starNumber: number, feedback?: string) => void;
  defaultRating?: number;
}

export const RatingCard = memo(function RatingCard({
  className,
  title,
  hasFeedback = false,
  feedbackTitle,
  onAccept,
  onCancel,
  defaultRating,
}: RatingCardProps) {
  const { t } = useTranslation("translation", { keyPrefix: "RatingCard" });
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [star, setStar] = useState(defaultRating ?? 0);

  const handleModalAccept = useCallback(() => {
    onAccept?.(star, feedback);
    setIsOpen(false);
  }, [feedback, onAccept, star]);

  const handleModalCancel = useCallback(() => {
    onCancel?.(star);
    setIsOpen(false);
  }, [onCancel, star]);

  const handleStarSelect = useCallback(
    (star: number) => {
      setStar(star);
      if (hasFeedback) {
        setIsOpen(true);
      } else {
        onAccept?.(star);
      }
    },
    [hasFeedback, onAccept],
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const feedbackContent = (
    <VStack gap={16}>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} />
      <HStack gap={16} justify="end">
        <Button variant="outline" onClick={handleModalCancel}>
          {t("Отмена")}
        </Button>
        <Button variant="outline" onClick={handleModalAccept}>
          {t("Отправить")}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={className}>
      <VStack align="center" gap={8}>
        <Text title={title} />
        <StarRating selected={star} onSelect={handleStarSelect} />
      </VStack>
      {hasFeedback && (
        <>
          <BrowserView>
            <Modal isOpen={isOpen} onClose={handleClose} lazy>
              {feedbackContent}
            </Modal>
          </BrowserView>
          <MobileView>
            <Drawer isOpen={isOpen} onClose={handleClose} lazy>
              {feedbackContent}
            </Drawer>
          </MobileView>
        </>
      )}
    </Card>
  );
});
