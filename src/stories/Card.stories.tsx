import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CardProps } from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    elevation: {
      control: {
        type: 'radio',
        options: ['low', 'medium', 'high'],
      },
    },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  children: 'This is a basic card with default settings.',
};

export const Elevated = Template.bind({});
Elevated.args = {
  title: 'Elevated Card',
  children: 'This card has high elevation.',
  elevation: 'high',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  title: 'Custom Width Card',
  children: 'This card has a custom width of 400px.',
  width: '400px',
};