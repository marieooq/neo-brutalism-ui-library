import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import DropDown from "../components/DropDown";

const meta = {
  title: "Components/DropDown",
  component: DropDown,
  decorators: [withRouter],
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Options",
    list: [
      { to: "#", name: "Account settings" },
      { to: "#", name: "Support" },
      { to: "#", name: "License" },
    ],
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
