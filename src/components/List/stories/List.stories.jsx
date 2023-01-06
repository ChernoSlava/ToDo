import React from "react";
import { List } from "..";

export default {
    title: "Example/List",
    component: List,
    argTypes: { onFinish: { action: 'clicked' },  onRemove: { action: 'clicked' },  onEdit: { action: 'clicked' }},
}

const Template = args => <div style={{ height: '100px' }}><List {...args} /></div>;

export const Playground = Template.bind({});

Playground.args = {
    items: [
        {
            id: 1,
            title: 'Купить корм попугаю',
            isFinish: false
        },
        {
            id: 2,
            title: 'Купить подарок',
            isFinish: true
        },
        {
            id: 3,
            title: 'Выжить',
            isFinish: false
        }
    ]
}
