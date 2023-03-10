import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popup } from '..';

export default {
  title: 'Example/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => <Popup {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {
  position: {
    control: {
      type: 'select',
      options: ['absolute', 'fixed'],
    },
  },
};
