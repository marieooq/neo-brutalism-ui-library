import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Input from "../components/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [withRouter],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { placeholder: "you@example.com" },
};

export const Rounded: Story = {
  args: { ...Primary.args, rounded: "md" },
};

export const FullRounded: Story = {
  args: { ...Primary.args, rounded: "full" },
};

export const Violet: Story = {
  args: { ...FullRounded.args, focusColor: "violet" },
};

export const Pink: Story = {
  args: { ...FullRounded.args, focusColor: "pink" },
};

export const Red: Story = {
  args: { ...FullRounded.args, focusColor: "red" },
};

export const Orange: Story = {
  args: { ...FullRounded.args, focusColor: "orange" },
};

export const Yellow: Story = {
  args: { ...FullRounded.args, focusColor: "yellow" },
};

export const Lime: Story = {
  args: { ...FullRounded.args, focusColor: "lime" },
};

export const Cyan: Story = {
  args: { ...FullRounded.args, focusColor: "cyan" },
};
