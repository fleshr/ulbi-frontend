import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Title", text: "Text" },
};

export const Center: Story = {
  args: { title: "Title", text: "Text", align: "center" },
};

export const Right: Story = {
  args: { title: "Title", text: "Text", align: "right" },
};

export const Error: Story = {
  args: { title: "Title", text: "Text", variant: "error" },
};

export const TitleOnly: Story = {
  args: { title: "Title" },
};

export const TextOnly: Story = {
  args: { text: "Text" },
};

export const SizeSm: Story = {
  args: { title: "Title", text: "Text", size: "sm" },
};

export const SizeMd: Story = {
  args: { title: "Title", text: "Text", size: "md" },
};

export const SizeLg: Story = {
  args: { title: "Title", text: "Text", size: "lg" },
};
