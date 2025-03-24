import React from "react";
import BlockText from "../components/Advertisement/BlockText/BlockText";
import { BlockTextProps } from "../components/Advertisement/BlockText/BlockText";
import { Meta, StoryFn } from "@storybook/react";

export default {
    title: "Components/BlockText",
    component: BlockText,
    argTypes: {
        wrapperClass : {
            control : "text",
        },
        blockTextClass : {
            control : "text",
        },
        value : {
            control : "text",
        }
    },
} as Meta<typeof BlockText>;

const Template: StoryFn<BlockTextProps> = (args) => <BlockText {...args} />;

export const Default = Template.bind({});   
Default.args = {
    wrapperClass : "abc",
    blockTextClass : "cde",
    value : "hi"
};