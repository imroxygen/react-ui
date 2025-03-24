import React,{ Meta, StoryFn } from "@storybook/react";
import Tabs,{TabsProps} from "../components/Advertisement/Tabs/Tabs";
import { MemoryRouter } from "react-router-dom";
import { useState } from "react";

// Mock Components
const HeaderSection = () => <div style={{ padding: "10px", background: "#f4f4f4" }}>Header Section</div>;
const BannerSection = () => <div style={{ padding: "10px", background: "#ccc" }}>Banner Section</div>;

// Sample Data for Tabs
interface TabItem {
    id: string;
    name: string;
    desc: string;
    icon: string;
  }
  
  interface FileTab {
    type: "file";
    content: TabItem;
  }
  
  interface FolderTab {
    type: "folder";
    content: FileTab[];
  }
  
  type TabData = FileTab | FolderTab;

  const tabData: TabData[] = [
    {
      type: "file",
      content: {
        id: "dashboard",
        name: "Dashboard",
        desc: "View overview",
        icon: "adminLib-dashboard",
      },
    },
    {
      type: "folder",
      content: [
        {
          type: "file",
          content: {
            id: "settings",
            name: "Settings",
            desc: "Manage settings",
            icon: "adminLib-settings",
          },
        },
        {
          type: "file",
          content: {
            id: "profile",
            name: "Profile",
            desc: "Update your profile",
            icon: "adminLib-user",
          },
        },
      ],
    },
  ];

export default {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof Tabs>;

// Template function
const Template: StoryFn<TabsProps> = (args) => {
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <Tabs
      {...args}
      currentTab={currentTab}
      getForm={(tabId) => <div style={{ padding: "20px" }}>Form for {tabId}</div>}
      prepareUrl={(tabId) => `/${tabId}`}
    />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  tabData,
  HeaderSection,
  BannerSection,
  horizontally: false,
};
