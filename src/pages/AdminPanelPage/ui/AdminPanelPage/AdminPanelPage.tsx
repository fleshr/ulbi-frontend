import { Text, VStack } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const AdminPanelPage: FC = memo(function AdminPanelPage() {
  const { t } = useTranslation("adminPanelPage");

  return (
    <Page data-testid="AdminPanelPage">
      <VStack align="center" justify="center" fullHeight>
        <Text title={t("Панель администратора")} />
      </VStack>
    </Page>
  );
});

export default AdminPanelPage;
