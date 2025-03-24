import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AdminFooter from '../components/Advertisement/AdminFooter/AdminFooter';

export default {
    title: 'Components/AdminFooter',
    component: AdminFooter,
} as Meta<typeof AdminFooter>;

const Template: StoryFn = (args) => <AdminFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
