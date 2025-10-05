/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from "@storybook/react";
import TeamDropdown from "@/shared/ui/dropdown/TeamDropdown";
import { baseBallTeamItems } from "@/entities/team/team";

const meta = {
  title: "dropdown/TeamDropdown",
  component: TeamDropdown,
  parameters: { layout: "centered" },
  argTypes: {
    value: {
      control: "select",
      options: [null, ...baseBallTeamItems.map((i) => i.value)],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "change" },
    className: { control: false },
    items: { control: false },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TeamDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: null,
    placeholder: "팀 선택",
    disabled: false,
    items: baseBallTeamItems,
  },
};
