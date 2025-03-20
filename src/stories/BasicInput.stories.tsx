import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import  { BasicInput, BasicInputProps } from "../components/BasicInput";

export default {
    title: "Components/BasicInput",
    component: BasicInput,
    argTypes: {
        type: {
            control: "select",
            options: ["text", "number", "password", "email", "file", "range"],
        },
        value: {
            control: "text",
        },
        placeholder: {
            control: "text",
        },
        min: {
            control: "number",
        },
        max: {
            control: "number",
        },
        proSetting: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        onChange: { action: "changed" },
    },
} as Meta<typeof BasicInput>;

const Template: StoryFn<BasicInputProps> = (args) => <BasicInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    inputLabel: "Basic Input",
    type: "text",
    placeholder: "Enter text...",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    inputLabel: "Number Input",
    type: "number",
    min: 1,
    max: 100,
    value: 50,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    inputLabel: "Password Input",
    type: "password",
    placeholder: "Enter password...",
};

export const FileInput = Template.bind({});
FileInput.args = {
    inputLabel: "File Upload",
    type: "file",
};

export const RangeInput = Template.bind({});
RangeInput.args = {
    inputLabel: "Range Input",
    type: "range",
    min: 0,
    max: 100,
    value: 50,
    rangeUnit: "%",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
    inputLabel: "Input with Description",
    type: "text",
    description: "This is a description for the input.",
    descClass: "text-gray-500",
};

export const ProSetting = Template.bind({});
ProSetting.args = {
    inputLabel: "Pro Feature Input",
    type: "text",
    proSetting: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    inputLabel: "Disabled Input",
    type: "text",
    disabled: true,
    placeholder: "Can't type here...",
};
