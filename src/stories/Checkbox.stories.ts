import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Checkbox from "../components/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [withRouter],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Large: Story = { args: { size: "lg" } };

export const Violet: Story = { args: { color: "violet" } };

export const Pink: Story = { args: { color: "pink" } };

export const Red: Story = { args: { color: "red" } };

export const Orange: Story = { args: { color: "orange" } };

export const Yellow: Story = { args: { color: "yellow" } };

export const Lime: Story = { args: { color: "lime" } };

export const Cyan: Story = { args: { color: "cyan" } };
