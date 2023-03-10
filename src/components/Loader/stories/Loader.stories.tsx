import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from '..';

export default {
  title: 'Example/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Playground = Template.bind({});

Playground.argTypes = {};
