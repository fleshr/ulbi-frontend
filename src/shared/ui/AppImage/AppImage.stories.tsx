import type { Meta, StoryObj } from "@storybook/react";
import img from "../../assets/tests/img.jpg";
import { AppImage } from "./AppImage";

const meta = {
  title: "shared/AppImage",
  component: AppImage,
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { src: img },
};

export const Error: Story = {
  args: { src: "/sksksks", errorFallback: "Error fallback" },
};
