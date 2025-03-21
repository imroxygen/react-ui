import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioInput } from "../components";

const meta: Meta<typeof RadioInput> = {
    title: "Components/RadioInput",
    component: RadioInput,
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof RadioInput>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState<string>("");

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedValue(e.target.value);
            args.onChange?.(e);
        };

        return <RadioInput {...args} value={selectedValue} onChange={handleChange} />;
    },
    args: {
        wrapperClass: "p-4 border rounded",
        inputWrapperClass: "flex gap-4 items-center",
        inputClass: "cursor-pointer",
        idPrefix: "radio-input",
        type: "default",
        options: [
            { key: "opt1", keyName: "first", value: "option1", label: "Option 1", name: "radio-group" },
            { key: "opt2", keyName: "second", value: "option2", label: "Option 2", name: "radio-group" },
        ],
        description: "Select one of the options above.",
        descClass: "text-gray-600 text-sm",
    },
};
