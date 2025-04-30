import avatar from "@/shared/assets/tests/avatar.jpg";
import type { Comment } from "../model/types";

export const mockComment: Comment = {
  id: "1",
  text: "some comment",
  user: {
    id: "1",
    username: "admin",
    avatar,
  },
};
