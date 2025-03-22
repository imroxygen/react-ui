import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ShortCodeTable from "../components/Input/ShortCodeTable/ShortCodeTable";
import { ShortCodeTableProps } from "../components/Input/ShortCodeTable";

export default {
    title: "Components/ShortCodeTable",
    component: ShortCodeTable,
    argTypes: {
        wrapperClass: { control: "text" },
        descClass: { control: "text" },
        description: { control: "text" },
        optionLabel: { control: "object" },
        options: { control: "check" },
    },
} as Meta<typeof ShortCodeTable>;

interface Option {
    label: string;
    desc: string;
}

const Template: StoryFn<ShortCodeTableProps> = (args) => <ShortCodeTable {...args} />;

export const Default = Template.bind({});
Default.args = {
    wrapperClass: "shortcode-wrapper",
    descClass: "shortcode-desc",
    description: "This is a table displaying shortcodes and their descriptions.",
    optionLabel: ["Shortcode", "Description"],
    options: [
        { label: "[shortcode_1]", desc: "Description for shortcode 1." },
        { label: "[shortcode_2]", desc: "Description for shortcode 2." },
    ] as Option[],
};

export const WithAdditionalOptions = Template.bind({});
WithAdditionalOptions.args = {
    ...Default.args,
    options: [
        { label: "[shortcode_3]", desc: "Extra shortcode example." },
        { label: "[shortcode_4]", desc: "Another extra shortcode." },
    ],
};
