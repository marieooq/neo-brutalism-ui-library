import type { Meta, StoryObj } from "@storybook/react";

import ToggleSwitch from "../components/ToggleSwitch";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};

export const Violet: Story = {
  args: {
    color: "violet",
  },
};

export const Pink: Story = {
  args: {
    color: "pink",
  },
};

export const Red: Story = {
  args: {
    color: "red",
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
  },
};

export const Lime: Story = {
  args: {
    color: "lime",
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
  },
};

export const WithText: Story = {
  args: {
    text: "Toggle me",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    disabled: true,
  },
};
