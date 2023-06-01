import type { Meta, StoryObj } from "@storybook/react";
import gearIcon from "../assets/gear.svg";
import IconButton from "../components/IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: gearIcon,
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

export const VioletButton: Story = {
  args: {
    ...FullRounded.args,
    color: "violet",
  },
};

export const PinkButton: Story = {
  args: {
    ...FullRounded.args,
    color: "pink",
  },
};

export const RedButton: Story = {
  args: {
    ...FullRounded.args,
    color: "red",
  },
};

export const OrangeButton: Story = {
  args: {
    ...FullRounded.args,
    color: "orange",
  },
};

export const YellowButton: Story = {
  args: {
    ...FullRounded.args,
    color: "yellow",
  },
};

export const LimeButton: Story = {
  args: {
    ...FullRounded.args,
    color: "lime",
  },
};

export const CyanButton: Story = {
  args: {
    ...FullRounded.args,
    color: "cyan",
  },
};
