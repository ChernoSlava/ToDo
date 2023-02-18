import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddInput } from '..';

export default {
  title: 'Example/AddInput',
  component: AddInput,
  argTypes: { onAdd: { action: 'clicked' } },
} as ComponentMeta<typeof AddInput>;

const Template: ComponentStory<typeof AddInput> = args => (
  <AddInput {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};
