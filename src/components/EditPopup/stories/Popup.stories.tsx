import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditPopup } from '../EditPopup';

export default {
  title: 'Example/EditPopup',
  component: EditPopup,
  argTypes: { onAdd: { action: 'clicked' } },
} as ComponentMeta<typeof EditPopup>;

const Template: ComponentStory<typeof EditPopup> = args => (
  <div id="div1">
    <EditPopup {...args} />
  </div>
);

export const Playground = Template.bind({});

Playground.args = {
  content: <div>content</div>,
  footer: <div>footer</div>,
};
