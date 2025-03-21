import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { HeadingProps } from "../components/Input/Heading";
import Heading from "../components/Input/Heading/Heading";

export default {
    title: "Components/Heading",
    component: Heading,
    argTypes: {
        blocktext: { control: "text" },
        wrapperClass: { control: "text" },
    },
} as Meta<typeof Heading>;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    blocktext: "This is a Heading",
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    blocktext: "Styled Heading",
    wrapperClass: "custom-heading",
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
    blocktext: "<strong>Bold Heading</strong>",
};
