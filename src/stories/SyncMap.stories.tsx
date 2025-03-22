import { Meta, StoryFn } from "@storybook/react";
import SyncMap from "../components/Input/SyncMap/SyncMap";
import {SyncMapProps} from "../components/Input/SyncMap";
import React,{ useState } from "react";

export default {
    title: "Components/SyncMap",
    component: SyncMap,
    argTypes: {
        value: { control: "object" },
        onChange: { action: "changed" },
        proSetting: { control: "boolean" },
        proSettingChanged: { action: "proSettingChanged" },
        description: { control: "text" },
        syncFieldsMap: { control: "object" },
    },
} as Meta<typeof SyncMap>;

const Template: StoryFn<SyncMapProps> = (args) => {
    const [value, setValue] = useState<[string, string][]>(Array.isArray(args.value) 
    ? args.value.filter((pair): pair is [string, string] => Array.isArray(pair) && pair.length === 2) 
    : []
);
    return <SyncMap {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
    value: [],
    proSetting: false,
    description: "Sync fields between two systems.",
    syncFieldsMap: {
        WordPress: {
            heading: "WordPress Fields",
            fields: {
                first_name: "First Name",
                last_name: "Last Name",
                user_email: "User Email",
            },
        },
        Moodle: {
            heading: "Moodle Fields",
            fields: {
                firstname: "First Name",
                lastname: "Last Name",
                email: "Email Address",
            },
        },
    },
};
