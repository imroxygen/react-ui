import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SyncNow from "../components/Input/SyncNow/SyncNow";
import { SyncNowProps } from "../components/Input/SyncNow";


export default {
    title: "Components/SyncNow",
    component: SyncNow,
    argTypes: {
        interval: {
            control: "number",
            defaultValue: 5000,
        },
        proSetting: {
            control: "boolean",
        },
        value: {
            control: "text",
            defaultValue: "Sync Now",
        },
        description: {
            control: "text",
            defaultValue: "This will sync your data with the server.",
        },
        apilink: {
            control: "text",
            defaultValue: "/api/sync",
        },
        statusApiLink: {
            control: "text",
            defaultValue: "/api/status",
        },
        proSettingChanged: { action: "proSettingChanged" },
    },
} as Meta<typeof SyncNow>;

const Template: StoryFn<SyncNowProps> = (args) => <SyncNow {...args} />;

export const Default = Template.bind({});
Default.args = {
    interval: 5000,
    proSetting: false,
    value: "Sync Now",
    description: "This will sync your data with the server.",
    apilink: "/api/sync",
    statusApiLink: "/api/status",
};

export const ProFeature = Template.bind({});
ProFeature.args = {
    ...Default.args,
    proSetting: true,
};
