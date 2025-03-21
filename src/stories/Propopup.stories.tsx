import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ProPopup, ProPopupProps } from "../components";

export default {
    title: "Components/Popups/ProPopup",
    component: ProPopup,
    args: {
        proUrl: "https://example.com/upgrade",
    },
} as Meta<typeof ProPopup>;

const Template: StoryFn<ProPopupProps> = (args) => <ProPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
    proUrl: "https://example.com/upgrade",
};
