import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        placeholder: "dropdown",
        items: [
            {
                options: [
                    { value: "a", text: "dropdown_list" },
                    { value: "b", text: "dropdown_list" },
                    { value: "c", text: "dropdown_list" },
                ],
            },
        ],
    },
};

export const Error: Story = {
    args: {
        placeholder: "dropdown_list",
        tone: "error",
        errorMessage: "값을 선택하세요.",
        items: [
            {
                options: [
                    { value: "a", text: "dropdown_list" },
                    { value: "b", text: "dropdown_list" },
                ],
            },
        ],
    },
};
