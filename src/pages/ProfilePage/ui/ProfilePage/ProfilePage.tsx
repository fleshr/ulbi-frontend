import { EditableProfileCard } from "@/features/EditableProfileCard";
import { HStack, Text } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ProfilePage: FC = memo(function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("profilePage");

  if (!id) {
    return (
      <Page>
        <HStack justify="center" fullHeight>
          <Text title={t("Профиль не найден")} />
        </HStack>
      </Page>
    );
  }

  return (
    <Page>
      <EditableProfileCard profileId={id} />
    </Page>
  );
});

export default ProfilePage;
