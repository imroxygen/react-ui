import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CatalogCustomizer from '../components/Input/CatalogCustomizer/CatalogCustomizer';
import { CatalogCustomizerProps } from '../components/Input/CatalogCustomizer';

export default {
    title: 'Components/CatalogCustomizer',
    component: CatalogCustomizer,
  } as Meta<typeof CatalogCustomizer>;
  
  const Template: StoryFn<CatalogCustomizerProps> = (args) => <CatalogCustomizer {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    setting: {},
    proSetting: false,
    onChange: (key: string, value: any) => console.log(`Setting changed: ${key} ->`, value),
  };
  
  export const ProMode = Template.bind({});
  ProMode.args = {
    setting: {},
    proSetting: true,
    onChange: (key: string, value: any) => console.log(`Setting changed: ${key} ->`, value),
  };
  
  export const WithCustomSettings = Template.bind({});
  WithCustomSettings.args = {
    setting: {
      hide_product_price: true,
      hide_product_desc: false,
      enquery_button: { button_text: 'Custom Enquiry' },
      quote_button: { button_text: 'Custom Quote' },
    },
    proSetting: true,
    onChange: (key: string, value: any) => console.log(`Setting changed: ${key} ->`, value),
  };
  