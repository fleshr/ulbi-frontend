import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  args: { children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: { variant: "clear" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Filled: Story = {
  args: { variant: "filled" },
};

export const ClearDisabled: Story = {
  args: { variant: "clear", disabled: true },
};

export const OutlineDisabled: Story = {
  args: { variant: "outline", disabled: true },
};

export const FilledDisabled: Story = {
  args: { variant: "filled", disabled: true },
};

export const SizeSm: Story = {
  args: { variant: "filled", size: "sm" },
};

export const SizeMd: Story = {
  args: { variant: "filled", size: "md" },
};

export const SizeLg: Story = {
  args: { variant: "filled", size: "lg" },
};

export const SizeXl: Story = {
  args: { variant: "filled", size: "xl" },
};
