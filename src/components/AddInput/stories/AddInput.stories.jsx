import React from "react";
import { AddInput } from "..";

export default {
    title: "Example/AddInput",
    component: AddInput,
    argTypes: { onAdd: { action: 'clicked' }},
}

const Template = args => <AddInput {...args} />;

export const Playground = Template.bind({});

Playground.args = {
}
