import { RoutePath } from "@/shared/constants";
import { classNames } from "@/shared/lib";
import { AppLink, Avatar, HStack, Skeleton, Text, VStack } from "@/shared/ui";
import { memo } from "react";
import type { Comment as CommentType } from "../../model/types";
import styles from "./Comment.module.scss";

interface CommentProps {
  className?: string;
  comment: CommentType;
  isLoading?: boolean;
}

export const Comment = memo(function Comment({
  className,
  comment: { user, text },
  isLoading = false,
}: CommentProps) {
  if (isLoading) {
    return (
      <VStack gap={4} className={classNames(styles.comment, {}, [className])}>
        <HStack gap={8}>
          <Skeleton width={30} radius="50%" />
          <Skeleton width={100} height={20} />
        </HStack>
        <Skeleton width={300} height={20} />
      </VStack>
    );
  }

  return (
    <VStack gap={4} className={classNames(styles.comment, {}, [className])}>
      <AppLink
        className={classNames(styles.header, {}, [])}
        to={RoutePath.getProfileRoute(user.id)}
      >
        <HStack gap={8}>
          {user.avatar && <Avatar size={30} src={user.avatar} />}
          <Text title={user.username} />
        </HStack>
      </AppLink>
      <Text text={text} />
    </VStack>
  );
});
