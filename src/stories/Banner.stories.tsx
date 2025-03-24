import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Banner from '../components/Advertisement/Banner/Banner';
// import { AppLocalizer } from '../path-to-types';

// Mock appLocalizer for testing
// const appLocalizer: AppLocalizer = {
//     khali_dabba: false,
//     pro_url: 'https://example.com/pricing'
// };

export default {
    title: 'Components/Banner',
    component: Banner,
} as Meta<typeof Banner>;

const Template: StoryFn<typeof Banner> = (args) => <Banner />;

export const Default = Template.bind({});
Default.args = {};

// export const WithKhaliDabba = Template.bind({});
// WithKhaliDabba.args = {
//     appLocalizer: { khali_dabba: true, pro_url: 'https://example.com/pro' }
// };
