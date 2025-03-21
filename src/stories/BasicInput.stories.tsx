import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BasicInput, BasicInputProps } from "../components";

export default {
  title: "Components/BasicInput",
  component: BasicInput,
  argTypes: {
    type: { control: "select", options: ["text", "number", "password", "email", "file", "range"] },
    value: { control: "text" },
    placeholder: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    disabled: { control: "boolean" },
    proSetting: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta<typeof BasicInput>;

// Reusable Template with State Handling
const Template: StoryFn<BasicInputProps> = (args) => {
  const [value, setValue] = useState<string | number | undefined>(args.value);

  return (
    <BasicInput
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange && args.onChange(e);
      }}
    />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  inputLabel: "Basic Input",
  type: "text",
  placeholder: "Enter text...",
};

// Number Input
export const NumberInput = Template.bind({});
NumberInput.args = {
  inputLabel: "Number Input",
  type: "number",
  min: 1,
  max: 100,
  value: 50,
};

// Password Input
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  inputLabel: "Password Input",
  type: "password",
  placeholder: "Enter password...",
};

// Email Input
export const EmailInput = Template.bind({});
EmailInput.args = {
  inputLabel: "Email Input",
  type: "email",
  placeholder: "Enter email...",
};

// File Upload
export const FileInput = Template.bind({});
FileInput.args = {
  inputLabel: "File Upload",
  type: "file",
};

// Range Slider
export const RangeInput = Template.bind({});
RangeInput.args = {
  inputLabel: "Range Input",
  type: "range",
  min: 0,
  max: 100,
  value: 50,
  rangeUnit: "%",
};

// Input with Description
export const WithDescription = Template.bind({});
WithDescription.args = {
  inputLabel: "Input with Description",
  type: "text",
  description: "This is a description for the input.",
};

// Pro Setting Enabled
export const ProSetting = Template.bind({});
ProSetting.args = {
  inputLabel: "Pro Feature Input",
  type: "text",
  proSetting: true,
};

// Disabled Input
export const Disabled = Template.bind({});
Disabled.args = {
  inputLabel: "Disabled Input",
  type: "text",
  disabled: true,
  placeholder: "Can't type here...",
};
