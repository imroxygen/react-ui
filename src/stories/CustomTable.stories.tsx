import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomTable from '../components/Advertisement/AdminFooter/AdminFooter';
import {CustomTableProps} from '../components/Advertisement/CustomTable';


export default {
    title: 'Components/CustomTable',
    component: CustomTable,
} as Meta<typeof CustomTable>;

const Template: StoryFn<typeof CustomTable> = (args) => <CustomTable {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
    ],
    columns: [
        { name: 'ID', selector: (row: { id: number }) => row.id, sortable: true },
        { name: 'Name', selector: (row: { name: string }) => row.name, sortable: true },
        { name: 'Age', selector: (row: { age: number }) => row.age, sortable: true },
    ],
    defaultTotalRows: 2,
    perPageOption: [5, 10, 20],
};