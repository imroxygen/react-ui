import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ModulePopup from "../components/Advertisement/PopupContent/ModulePopup";

export default {
    title: "Components/Popups/ModulePopup",
    component: ModulePopup,
    args: {
        name: "Sample Module",
        settings: false,
        plugin: "",
    },
} as Meta<typeof ModulePopup>;

const Template: StoryFn<typeof ModulePopup> = (args) => <ModulePopup {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Sample Module",
    settings: true,
    plugin: "notifima",
};
