import type { Meta, StoryObj } from "@storybook/react";
import StatCard from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: "layout/StatCard",
  component: StatCard,
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const TrendingUp: Story = {
  args: {
    title: "Avg Sleep",
    value: "7.2h",
    trend: { direction: "up", percentage: 12 },
  },
};

export const TrendingDown: Story = {
  args: {
    title: "Stress Level",
    value: "6.8/10",
    trend: { direction: "down", percentage: 5 },
  },
};

export const Flat: Story = {
  args: {
    title: "Screen Time",
    value: "4.5h",
    trend: { direction: "flat", percentage: 0 },
  },
};

export const NoTrend: Story = {
  args: {
    title: "Total Entries",
    value: "42",
  },
};
