import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MultiCheckboxTable from '../components/Input/MultiCheckboxTable/MultiCheckboxTable';
import { MultiCheckboxTableProps } from '../components/Input/MultiCheckboxTable';

export default {
    title: 'Components/MultiCheckboxTable',
    component: MultiCheckboxTable,
} as Meta<typeof MultiCheckboxTable>;

const Template: StoryFn<MultiCheckboxTableProps> = (args) => {
    const [settings, setSettings] = useState<{ [key: string]: string[] }>({});
    const [modules, setModules] = useState<string[]>([]);

    const handleChange = (key: string, value: string[]) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    };

    const handleModuleChange = (module: string) => {
        setModules((prevModules) => [...prevModules, module]);
        alert(`Module ${module} is required!`);
    };

    return (
        <MultiCheckboxTable
            {...args}
            setting={settings}
            onChange={handleChange}
            modules={modules}
            moduleChange={handleModuleChange}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    rows: [
        { key: 'row1', label: 'Row 1', options: [{ value: 'opt1', label: 'Option 1' }, { value: 'opt2', label: 'Option 2' }] },
        { key: 'row2', label: 'Row 2', options: [{ value: 'opt3', label: 'Option 3' }] },
    ],
    columns: [
        { key: 'col1', label: 'Column 1' },
        { key: 'col2', label: 'Column 2', moduleEnabled: 'ProFeature' },
    ],
    proSetting: true,
};
