import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Support from "../components/Advertisement/Support/Support";

export default {
  title: "Components/Support",
  component: Support,
} as Meta;

const Template: StoryFn = () => <Support />;

export const Default = Template.bind({});