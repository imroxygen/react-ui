import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MergeComponent from "../components/Input/MergeComponent/MergeComponent";
import { MergeComponentProps } from "../components/Input/MergeComponent";

export default {
    title: "Components/MergeComponent",
    component: MergeComponent,
    argTypes: {
        wrapperClass: { control: "text" },
        descClass: { control: "text" },
        description: { control: "text" },
        value: { control: "object" },
        proSetting: { control: "boolean" },
        fields: { control: "object" },
        onChange: { action: "changed" },
    },
} as Meta<typeof MergeComponent>;

const Template: StoryFn<MergeComponentProps> = (args) => <MergeComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    wrapperClass: "merge-wrapper",
    descClass: "description-class",
    description: "This is a merge component.",
    value: {},
    proSetting: false,
    fields: [
        { name: "option1", type: "select", options: [
            { label: "Option A", value: "A" },
            { label: "Option B", value: "B" }
        ]},
        { name: "number1", type: "number", placeholder: "Enter a number" }
    ],
    onChange: (data) => console.log("Changed:", data),
};

export const WithProSetting = Template.bind({});
WithProSetting.args = {
    ...Default.args,
    proSetting: true,
};
