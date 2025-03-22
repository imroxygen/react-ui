import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CheckboxCustomImgProps } from "../components/Input/CheckboxCustomImg";
import CheckboxCustomImg from "../components/Input/CheckboxCustomImg/CheckboxCustomImg";

export default {
    title: "Components/CheckboxCustomImg",
    component: CheckboxCustomImg,
    argTypes: {
        value: {
            control: { type: "check" },
        },
        onChange: { action: "changed" },
        syncDirections: {
            control: { type: "object" },
        },
        description: {
            control: { type: "text" },
        },
        proSetting: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof CheckboxCustomImg>;

const Template: StoryFn<CheckboxCustomImgProps> = (args) => <CheckboxCustomImg {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: [],
    syncDirections: [
        { value: "left", img1: "/images/left.png", img2: "/images/right.png", label: "Left to Right" },
        { value: "top", img1: "/images/top.png", img2: "/images/bottom.png", label: "Top to Bottom" },
    ],
};

export const WithPreselectedValues = Template.bind({});
WithPreselectedValues.args = {
    value: ["left"],
    syncDirections: [
        { value: "left", img1: "/images/left.png", img2: "/images/right.png", label: "Left to Right" },
        { value: "top", img1: "/images/top.png", img2: "/images/bottom.png", label: "Top to Bottom" },
    ],
};

export const WithDescription = Template.bind({});
WithDescription.args = {
    value: [],
    syncDirections: [
        { value: "left", img1: "/images/left.png", img2: "/images/right.png", label: "Left to Right" },
    ],
    description: "This is a description for the checkbox selection.",
};

export const ProFeature = Template.bind({});
ProFeature.args = {
    value: [],
    syncDirections: [
        { value: "top", img1: "/images/top.png", img2: "/images/bottom.png", label: "Top to Bottom" },
    ],
    proSetting: true,
};

export const AllOptionsSelected = Template.bind({});
AllOptionsSelected.args = {
    value: ["left", "top"],
    syncDirections: [
        { value: "left", img1: "/images/left.png", img2: "/images/right.png", label: "Left to Right" },
        { value: "top", img1: "/images/top.png", img2: "/images/bottom.png", label: "Top to Bottom" },
    ],
};

export const NoOptions = Template.bind({});
NoOptions.args = {
    value: [],
    syncDirections: [],
};

