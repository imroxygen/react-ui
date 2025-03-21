import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import MultiCheckBox from "../components/Input/MultiCheckbox/MultiCheckbox";

export default {
    title: "Components/MultiCheckBox",
    component: MultiCheckBox,
    argTypes: {
        onChange: { action: "changed" },
        onMultiSelectDeselectChange: { action: "multi-select/deselect clicked" },
    },
} as Meta;

const Template: StoryFn = (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedValues((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    return (
        <MultiCheckBox
            {...args}
            value={selectedValues}
            onChange={handleChange}
            options={args.options || []} // ✅ Ensure 'options' is always passed
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    wrapperClass: "multi-checkbox-wrapper",
    selectDeselect: true,
    selectDeselectClass: "select-deselect-btn",
    selectDeselectValue: "Select All",
    options: [ // ✅ Ensure 'options' is explicitly passed
        { key: "option1", value: "1", label: "Option 1" },
        { key: "option2", value: "2", label: "Option 2", proSetting: true },
        { key: "option3", value: "3", label: "Option 3", hints: "Hint for Option 3" },
    ],
    idPrefix: "multi-checkbox",
    type: "checkbox",
    inputClass: "checkbox-input",
    inputWrapperClass: "checkbox-item",
    rightContent: false,
    rightContentClass: "checkbox-label",
    hintOuterClass: "checkbox-hint",
    description: "This is a multi-checkbox component.",
    descClass: "description-class",
};
