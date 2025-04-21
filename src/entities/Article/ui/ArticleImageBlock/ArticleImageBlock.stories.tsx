import img from "@/shared/assets/tests/img.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ArticleBlockType,
  ArticleImageBlock as ArticleImageBlockType,
} from "../../model/types";
import { ArticleImageBlock } from "./ArticleImageBlock";

const block: ArticleImageBlockType = {
  id: "2",
  type: ArticleBlockType.IMAGE,
  src: img,
  title: "Рисунок 1 - скриншот сайта",
};

const meta = {
  title: "entities/Article/ArticleImageBlock",
  component: ArticleImageBlock,
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { block },
};
