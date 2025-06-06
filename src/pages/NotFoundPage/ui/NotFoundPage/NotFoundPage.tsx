import { VStack } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const NotFoundPage: FC = memo(function NotFoundPage() {
  const { t } = useTranslation("notFoundPage");

  return (
    <Page data-testid="NotFoundPage">
      <VStack align="center" justify="center" fullHeight>
        {t("Страница не найдена")}
      </VStack>
    </Page>
  );
});

export default NotFoundPage;
