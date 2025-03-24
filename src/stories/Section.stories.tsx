import React from "react";
import { Meta,StoryFn } from "@storybook/react";
import Section,{SectionProps} from "../components/Advertisement/Section/Section";

export default {
    title: "Components/Section",
    component : Section,
    argTypes : {
        wrapperClass : {
            control : "text",
        },
        value : {
            control : "text",
        },
        hint : {
            control : "text",
        }
    }
}as Meta<typeof Section>;

const Template : StoryFn<SectionProps> = (args)=><Section {...args}/>;

export const Default= Template.bind({});
Default.args = {
    wrapperClass : "abc",
    value : "joy",
    hint : "Developer"
}