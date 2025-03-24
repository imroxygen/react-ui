import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Advertisement/DisplayButton/DisplayButton";
import { ButtonProps } from "../components/Advertisement/DisplayButton";

export default {
    title: "Components/DisplayButton",
    component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    customStyle: {
        button_border_size: 2,
        button_border_color: "#007bff",
        button_background_color: "#007bff",
        button_text_color: "#ffffff",
        button_border_radious: 5,
        button_font_size: 16,
        button_font_width: 600,
        button_margin: 5,
        button_padding: 10,
        button_border_color_onhover: "#0056b3",
        button_text_color_onhover: "#ffffff",
        button_background_color_onhover: "#0056b3",
        button_text: "Click Me",
    },
    onClick: () => alert("Button clicked!"),
};
