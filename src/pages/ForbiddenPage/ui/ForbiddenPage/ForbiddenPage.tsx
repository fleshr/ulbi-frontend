import { Text, VStack } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const ForbiddenPage: FC = memo(function ForbiddenPage() {
  const { t } = useTranslation("forbiddenPage");

  return (
    <Page data-testid="ForbiddenPage">
      <VStack align="center" justify="center" fullHeight>
        <Text title={t("У вас нет доступа к данной странице")} />
      </VStack>
    </Page>
  );
});

export default ForbiddenPage;
