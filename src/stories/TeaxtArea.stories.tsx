import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "../components";

export default {
    title: "Components/TextArea",
    component: TextArea,
    argTypes: {
        onChange: { action: "changed" },
        onClick: { action: "clicked" },
        onMouseOver: { action: "mouse over" },
        onMouseOut: { action: "mouse out" },
        onFocus: { action: "focused" },
    },
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => {
    const [text, setText] = useState(args.value || "");

    return (
        <TextArea
            {...args}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    wrapperClass: "textarea-wrapper",
    inputClass: "custom-textarea",
    id: "default-textarea",
    name: "textarea",
    placeholder: "Type something...",
    rowNumber: 5,
    colNumber: 60,
    maxLength: 200,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
    ...Default.args,
    description: "This is a description for the textarea.",
    descClass: "textarea-desc",
};

export const ProVersion = Template.bind({});
ProVersion.args = {
    ...Default.args,
    proSetting: true,
};
