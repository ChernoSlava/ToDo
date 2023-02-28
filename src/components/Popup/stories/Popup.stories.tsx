import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popup } from '../Popup';

export default {
  title: 'Example/Popup',
  component: Popup,
  argTypes: { onAdd: { action: 'clicked' } },
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => (
  <div id="div1">
    <Popup {...args} />
  </div>
);

export const Playground = Template.bind({});

Playground.args = {
  content: <div>content</div>,
  footer: <div>footer</div>,
};
