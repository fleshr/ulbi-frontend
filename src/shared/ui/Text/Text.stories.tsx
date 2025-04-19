import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const Error: Story = {
  args: {
    title: "Title",
    text: "Text",
    variant: "error",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Title",
  },
};

export const TextOnly: Story = {
  args: {
    text: "Text",
  },
};
