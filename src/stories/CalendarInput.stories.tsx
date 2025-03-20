import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CalendarInputProps } from "../components/CalendarInput";
import CalendarInput from "../components/CalendarInput/CalendarInput";

export default {
    title: "Components/CalendarInput",
    component: CalendarInput,
    argTypes: {
        format: { control: "text" },
        multiple: { control: "boolean" },
        range: { control: "boolean" },
        value: { control: "text" },
        proSetting: { control: "boolean" },
        onChange: { action: "changed" },
    },
} as Meta<typeof CalendarInput>;

const Template: StoryFn<CalendarInputProps> = (args) => <CalendarInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: "2025-03-20",
    format: "YYYY-MM-DD",
};

export const MultipleDates = Template.bind({});
MultipleDates.args = {
    value: "2025-03-20, 2025-03-25",
    multiple: true,
    format: "YYYY-MM-DD",
};

export const DateRange = Template.bind({});
DateRange.args = {
    value: "2025-03-20 - 2025-03-25",
    range: true,
    format: "YYYY-MM-DD",
};

export const ProFeature = Template.bind({});
ProFeature.args = {
    value: "2025-03-20",
    format: "YYYY-MM-DD",
    proSetting: true,
};

export const EmptyValue = Template.bind({});
EmptyValue.args = {
    value: "",
    format: "YYYY-MM-DD",
};
