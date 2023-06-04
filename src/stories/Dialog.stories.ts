import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Dialog from "../components/Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  decorators: [withRouter],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: "This is a Dialog comopnent. Your message comes here.",
  },
};

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    width: "full",
  },
};

export const HalfWidth: Story = {
  args: {
    ...Primary.args,
    width: "1/2",
  },
};

export const OneThirdsWidth: Story = {
  args: {
    ...Primary.args,
    width: "1/3",
  },
};

export const WithButtons: Story = {
  args: {
    ...OneThirdsWidth.args,
    cancelButtonText: "Cancel",
    actionButtonText: "Enable",
  },
};

export const VioletActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "violet",
  },
};

export const PinkActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "pink",
  },
};

export const RedActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "red",
  },
};

export const OrangeActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "orange",
  },
};

export const YellowActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "yellow",
  },
};

export const LimeActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "lime",
  },
};

export const CyanActionButton: Story = {
  args: {
    ...WithButtons.args,
    actionButtonColor: "cyan",
  },
};
