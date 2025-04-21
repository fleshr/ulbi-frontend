import { classNames } from "@/shared/lib";
import { Avatar, Skeleton, Text } from "@/shared/ui";
import { memo } from "react";
import { Comment as CommentType } from "../../model/types";
import styles from "./Comment.module.scss";

interface CommentProps {
  comment: CommentType;
  isLoading?: boolean;
}

export const Comment = memo(function Comment({
  comment: { user, text },
  isLoading = false,
}: CommentProps) {
  if (isLoading) {
    return (
      <div className={classNames(styles.comment, {}, [])}>
        <div className={classNames(styles.header, {}, [])}>
          <Skeleton width={30} radius="50%" />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton width={300} height={20} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.comment, {}, [])}>
      <div className={classNames(styles.header, {}, [])}>
        {user.avatar && <Avatar size={30} src={user.avatar} />}
        <Text title={user.username} />
      </div>
      <Text text={text} />
    </div>
  );
});
