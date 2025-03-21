import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MultiNumInput } from "../components";

const meta: Meta<typeof MultiNumInput> = {
    title: "Components/MultiNumInput",
    component: MultiNumInput,
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof MultiNumInput>;

export const Default: Story = {
    render: (args) => {
        const [values, setValues] = useState<{ key: string; value: string | number }[]>([]);

        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement>,
            keyName?: string,
            optionKey?: string,
            index?: number
        ) => {
            setValues((prev) => {
                const newValue = [...prev];
                if (index !== undefined && optionKey) {
                    newValue[index] = { key: optionKey, value: e.target.value };
                }
                return newValue;
            });
            args.onChange?.(e, keyName, optionKey, index);
        };

        return <MultiNumInput {...args} value={values} onChange={handleChange} />;
    },
    args: {
        parentWrapperClass: "p-4 border rounded",
        childWrapperClass: "flex flex-col gap-4",
        inputWrapperClass: "flex flex-col gap-2",
        innerInputWrapperClass: "border p-2 rounded",
        inputLabelClass: "font-semibold",
        inputClass: "border rounded p-2",
        idPrefix: "multi-num",
        options: [
            { key: "option1", label: "First Input", value: "", type: "number", name: "first" },
            { key: "option2", label: "Second Input", value: "", type: "number", name: "second" },
        ],
        proSetting: true,
        description: "Enter numbers in the fields above.",
        descClass: "text-gray-600 text-sm",
    },
};
