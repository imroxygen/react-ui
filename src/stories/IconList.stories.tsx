import React from "react";
import IconList from "../components/Input/IconList/IconList";
import {Meta,StoryFn} from "@storybook/react";

export default {
    title : "Components/IconList",
    component : IconList,
} as Meta;

const Template : StoryFn = ()=><IconList/>;

export const Default = Template.bind({});