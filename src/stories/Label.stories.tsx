import React from "react";
import Label,{LabelProps} from "../components/Advertisement/Label/Label";
import { Meta,StoryFn } from "@storybook/react";

export default {
    title : 'Components/Label',
    component : Label,
    argTypes: {
        wrapperClass : {
            control : "text",
        },
        descClass : {
            control : "text",
        },
        description : {
            control : "text",
        },
        value : {
            control : "text",
        }
    },
} as Meta<typeof Label>;

const Template : StoryFn<LabelProps> = (args)=> <Label {...args}/>;


export const Default = Template.bind({});   
Default.args = {
    wrapperClass : "abc",
    descClass : "cde",
    description:"fgh",
    value : "hi"
};