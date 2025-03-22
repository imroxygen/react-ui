import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SubTabSection from "../components/Input/SubTabSection/SubTabSection";

interface MenuItem {
    id: string;
    name: string;
    icon: string;
}

interface SubTabSectionProps {
    menuitem: MenuItem[];
    currentTab: MenuItem;
    setCurrentTab: (tab: MenuItem) => void;
}

export default {
    title: "Components/SubTabSection",
    component: SubTabSection,
    argTypes: {
        setCurrentTab: { action: "tab changed" },
    },
} as Meta<SubTabSectionProps>;

const Template: StoryFn<SubTabSectionProps> = (args) => {
    const [currentTab, setCurrentTab] = useState<MenuItem>(args.menuitem[0]);

    return <SubTabSection {...args} currentTab={currentTab} setCurrentTab={setCurrentTab} />;
};

export const Default = Template.bind({});
Default.args = {
    menuitem: [
    ],
    currentTab: { id: "dashboard", name: "Dashboard", icon: "icon-dashboard" },
};
