import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DeletePopup } from '..';

export default {
  title: 'Example/DeletePopup',
  component: DeletePopup,
  argTypes: { onAdd: { action: 'clicked' } },
} as ComponentMeta<typeof DeletePopup>;

const Template: ComponentStory<typeof DeletePopup> = args => (
  <DeletePopup {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};
