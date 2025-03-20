import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FileInputProps } from "../components/FileInput";
import FileInput from "../components/FileInput/FileInput";

export default {
    title: "Components/FileInput",
    component: FileInput,
    argTypes: {
        type: { control: "text" },
        value: { control: "text" },
        placeholder: { control: "text" },
        proSetting: { control: "boolean" },
        imageSrc: { control: "text" },
        imageWidth: { control: "text" },
        imageHeight: { control: "text" },
        openUploader: { control: "text" },
        description: { control: "text" },
        onChange: { action: "file selected" },
        onButtonClick: { action: "upload button clicked" },
    },
} as Meta<typeof FileInput>;

const Template: StoryFn<FileInputProps> = (args) => <FileInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Choose a file...",
};

export const WithImagePreview = Template.bind({});
WithImagePreview.args = {
    imageSrc: "https://via.placeholder.com/100",
    imageWidth: 100,
    imageHeight: 100,
    placeholder: "Choose a file...",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
    description: "Please upload a valid file.",
    descClass: "text-gray-500",
};

export const ProFeature = Template.bind({});
ProFeature.args = {
    proSetting: true,
};

export const WithUploadButton = Template.bind({});
WithUploadButton.args = {
    openUploader: "Upload File",
    buttonClass: "upload-button",
};
