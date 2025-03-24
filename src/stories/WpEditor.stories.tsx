import type { Meta, StoryFn } from "@storybook/react";
import WpEditor,{WpEditorProps} from "../components/Advertisement/WpEditor/WpEditor";
import React from "react";

export default {
    title: "Components/WpEditor",
    component: WpEditor,
    argTypes:{
        apiKey : {
            control : "text",
        },
        value : {
            control : "text",
        },
        onEditorChange : {
            control : "text",
        }
    }
} as Meta<typeof WpEditor>;

const Template: StoryFn<WpEditorProps> = (args) => <WpEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
    apiKey: "your-tinymce-api-key", // Replace with your actual TinyMCE API key
    value: "Initial content",
    onEditorChange: (content: string) => console.log("Editor content:", content),
};
