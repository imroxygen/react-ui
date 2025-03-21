import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SelectInput } from "../components";

export default {
    title: "Components/SelectInput",
    component: SelectInput,
    argTypes: {
        onChange: { action: "changed" },
        onMultiSelectDeselectChange: { action: "multi-select toggled" },
    },
} as Meta<typeof SelectInput>;

const Template: StoryFn<typeof SelectInput> = (args) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(args.value);

    return (
        <SelectInput
            {...args}
            value={selectedValue}
            onChange={(newValue) => {
                if (newValue && "value" in newValue) {
                    setSelectedValue(newValue.value);
                }
            }}
        />
    );
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    wrapperClass: "select-wrapper",
    inputClass: "custom-select",
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    type: "single-select",
    value: "option1",
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
    wrapperClass: "select-wrapper",
    inputClass: "custom-select",
    options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ],
    type: "multi-select",
    value: "",
};
