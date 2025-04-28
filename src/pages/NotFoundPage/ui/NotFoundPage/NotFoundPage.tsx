import { VStack } from "@/shared/ui";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

export const NotFoundPage: FC = memo(function NotFoundPage() {
  const { t } = useTranslation("notFoundPage");

  return (
    <VStack align="center" justify="center" fullHeight>
      {t("Страница не найдена")}
    </VStack>
  );
});

export default NotFoundPage;
