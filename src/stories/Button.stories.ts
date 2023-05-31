import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  // tags: ["autodocs"],
  // argTypes: {
  //   button: { control: "color" },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    buttonText: "button",
  },
};

export const Rounded: Story = {
  args: {
    buttonText: "button",
    rounded: "md",
  },
};

export const FullRounded: Story = {
  args: {
    buttonText: "button",
    rounded: "full",
  },
};

export const Small: Story = {
  args: {
    buttonText: "button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    buttonText: "button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    buttonText: "button",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    buttonText: "button",
    disabled: true,
  },
};
