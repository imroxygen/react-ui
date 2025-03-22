import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import ConnectButton from '../components/Input/ConnectButton/ConnectButton';
import {ConnectButtonProps} from '../components/Input/ConnectButton';

export default {
    title: 'Components/ConnectButton',
    component: ConnectButton,
    argTypes: {
        apiLink: { control: 'text' },
        tasks: { control: 'object' },
    },
} as Meta<typeof ConnectButton>;

const Template: StoryFn<ConnectButtonProps> = (args) => <ConnectButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    apiLink: 'https://example.com/api',
    tasks: [
        { action: 'check_connection', message: 'Checking connection...', cache: 'course_id' },
        { action: 'fetch_data', message: 'Fetching data...', cache: 'user_id' },
    ],
};
