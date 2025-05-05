import { RoutePath } from "@/shared/constants";
import { classNames } from "@/shared/lib";
import { TestProps } from "@/shared/types";
import { AppLink, Avatar, HStack, Skeleton, Text, VStack } from "@/shared/ui";
import { memo } from "react";
import type { Comment as CommentType } from "../../model/types";
import styles from "./Comment.module.scss";

interface CommentProps extends TestProps {
  className?: string;
  comment: CommentType;
  isLoading?: boolean;
}

export const Comment = memo(function Comment({
  className,
  comment: { user, text },
  isLoading = false,
  "data-testid": dataTestId = "Comment",
}: CommentProps) {
  if (isLoading) {
    return (
      <VStack
        gap={4}
        data-testid={`${dataTestId}.Skeleton`}
        className={classNames(styles.comment, {}, [className])}
      >
        <HStack gap={8}>
          <Skeleton width={30} radius="50%" />
          <Skeleton width={100} height={20} />
        </HStack>
        <Skeleton width={300} height={20} />
      </VStack>
    );
  }

  return (
    <VStack
      gap={4}
      data-testid={dataTestId}
      className={classNames(styles.comment, {}, [className])}
    >
      <AppLink
        className={styles.header}
        to={RoutePath.getProfileRoute(user.id)}
      >
        <HStack gap={8}>
          {user.avatar && <Avatar size={30} src={user.avatar} />}
          <Text data-testid={`${dataTestId}.Text`} title={user.username} />
        </HStack>
      </AppLink>
      <Text text={text} />
    </VStack>
  );
});
