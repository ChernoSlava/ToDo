import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from '../Loader';

export default {
  title: 'Example/Loader',
  component: Loader,
  argTypes: { onAdd: { action: 'clicked' } },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader /> ;

export const Playground = Template.bind({});

Playground.args = {};
