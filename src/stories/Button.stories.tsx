import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "../components/Input/Button";
import Button from "../components/Input/Button/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        type: {
            control: "select",
            options: ["button", "submit", "reset"],
        },
        value: {
            control: "text",
        },
        proSetting: {
            control: "boolean",
        },
        description: {
            control: "text",
        },
        onClick: { action: "clicked" },
    },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: "Click Me",
    type: "button",
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
    value: "Submit",
    type: "submit",
};

export const ResetButton = Template.bind({});
ResetButton.args = {
    value: "Reset",
    type: "reset",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
    value: "Info",
    type: "button",
    description: "This is a button with additional information.",
    descClass: "text-gray-500",
};

export const ProFeature = Template.bind({});
ProFeature.args = {
    value: "Pro Feature",
    type: "button",
    proSetting: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    value: "Disabled",
    type: "button",
    onClick: undefined, // No click action
};
