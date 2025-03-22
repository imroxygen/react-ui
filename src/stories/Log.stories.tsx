import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {LogProps} from "../components/Input/Log";
import Log from "../components/Input/Log/Log";


export default {
  title: "Components/Log",
  component: Log,
  argTypes: {
    fetchApiLink: { control: "text" },
    downloadApiLink: { control: "text" },
    downloadFileName: { control: "text" },
    appLocalizer:{
      nonce:{ control: "text" },
      tab_name:{ control: "text" },
    },
  },

} as Meta<typeof Log>;

const Template: StoryFn<LogProps> = (args) => <Log {...args} />;

export const Default = Template.bind({});
Default.args = {
  fetchApiLink: "/api/logs/fetch",
  downloadApiLink: "/api/logs/download",
  downloadFileName: "log.txt",
  appLocalizer:{
    nonce:"ABC",
    tab_name:"Happy"
  }
};
