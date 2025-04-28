import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
  title: "shared/Flex",
  component: Flex,
  args: {
    children: (
      <>
        <div>ITEM</div>
        <div>ITEM</div>
        <div>ITEM</div>
        <div style={{ width: 100, height: 100, background: "black" }}>BIG</div>
      </>
    ),
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Column: Story = {
  args: { direction: "column" },
};

export const Gap4: Story = {
  args: { gap: 4 },
};

export const Gap8: Story = {
  args: { gap: 8 },
};

export const Gap16: Story = {
  args: { gap: 16 },
};

export const Gap32: Story = {
  args: { gap: 32 },
};

export const AlignStart: Story = {
  args: { align: "start" },
};

export const AlignCenter: Story = {
  args: { align: "center" },
};

export const AlignEnd: Story = {
  args: { align: "end" },
};

export const JustifyStart: Story = {
  args: { justify: "start" },
};

export const JustifyCenter: Story = {
  args: { justify: "center" },
};

export const JustifyBetween: Story = {
  args: { justify: "between" },
};

export const JustifyEnd: Story = {
  args: { justify: "end" },
};
