import type { Meta, StoryObj } from "@storybook/react";
import ProgressBarr from "../components/ProgressBar";


const meta: Meta = {
  title: "Components/ProgressBarr",
  component: ProgressBarr,
} satisfies Meta<typeof ProgressBarr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
    minValue: 0,
    maxValue: 100,
    currentValue: 50,
    showPercentage: false,
  }
};

export const Rounded: Story = { args: {...Primary.args, rounded: "md"}};

export const Full: Story = { args: {...Primary.args, rounded: "full"}};

export const Violet: Story = { args: {...Primary.args, color: "violet"}};

export const Pink: Story = { args: {...Primary.args, color: "pink"}};

export const Red: Story = { args: {...Primary.args, color: "red"}};

export const Orange: Story = { args: {...Primary.args, color: "orange"}};

export const Yellow: Story = { args: {...Primary.args, color: "yellow"}};

export const Lime: Story = { args: {...Primary.args, color: "lime"}};

export const Cyan: Story = { args: {...Primary.args, color: "cyan"}};

export const ShowPercentage: Story = { args: {...Primary.args, showPercentage: true}};

