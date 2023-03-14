import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddPopup } from '../AddPopup';

export default {
  title: 'Example/AddPopup',
  component: AddPopup,
  argTypes: { onAdd: { action: 'clicked' } },
} as ComponentMeta<typeof AddPopup>;

const Template: ComponentStory<typeof AddPopup> = args => (
  <div id="div1">
    <AddPopup {...args} />
  </div>
);

export const Playground = Template.bind({});

Playground.args = {
  content: <div>content</div>,
  footer: <div>footer</div>,
};
