import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
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
    ...Primary.args,
    rounded: "md",
  },
};

export const FullRounded: Story = {
  args: {
    ...Primary.args,
    rounded: "full",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Violet: Story = {
  args: {
    ...Primary.args,
    color: "violet",
  },
};

export const Pink: Story = {
  args: {
    ...Primary.args,
    color: "pink",
  },
};

export const Red: Story = {
  args: {
    ...Primary.args,
    color: "red",
  },
};

export const Orange: Story = {
  args: {
    ...Primary.args,
    color: "orange",
  },
};

export const Yellow: Story = {
  args: {
    ...Primary.args,
    color: "yellow",
  },
};

export const Lime: Story = {
  args: {
    ...Primary.args,
    color: "lime",
  },
};

export const Cyan: Story = {
  args: {
    ...Primary.args,
    color: "cyan",
  },
};
