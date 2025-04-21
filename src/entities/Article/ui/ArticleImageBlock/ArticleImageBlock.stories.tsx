import type { Meta, StoryObj } from "@storybook/react";
import {
  ArticleBlockType,
  ArticleImageBlock as ArticleImageBlockType,
} from "../../model/types";
import { ArticleImageBlock } from "./ArticleImageBlock";

const block: ArticleImageBlockType = {
  id: "2",
  type: ArticleBlockType.IMAGE,
  src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
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
