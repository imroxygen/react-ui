import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToggleSetting from '../components/Input/ToggleSetting/ToggleSetting';
import { ToggleSettingProps } from '../components/Input/ToggleSetting';

export default {
    title: 'Components/ToggleSetting',
    component: ToggleSetting,
} as Meta<typeof ToggleSetting>;

const Template: StoryFn<ToggleSettingProps> = (args) => {
    const [selectedValue, setSelectedValue] = useState(args.value);
    
    return (
        <ToggleSetting
            {...args}
            value={selectedValue}
            onChange={(newValue) => setSelectedValue(newValue)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    description: 'Choose an option from below:',
    options: [
        { key: 'opt1', value: 'option1', label: 'Option 1' },
        { key: 'opt2', value: 'option2', label: 'Option 2' },
        { key: 'opt3', value: 'option3', label: 'Option 3' },
    ],
    value: 'option1',
    wrapperClass: 'custom-wrapper',
    descClass: 'custom-desc',
    proSetting: true,
};
