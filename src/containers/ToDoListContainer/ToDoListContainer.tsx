import React from 'react';
import { List } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import {
  finish,
  remove,
  revert,
  edit,
  getToDoListContainerProps,
} from '@store';

export const ToDoListContainer = () => {
  const { items } = useSelector(getToDoListContainerProps);
  const dispatch = useDispatch();
  return (
    <List
      items={items}
      onFinish={id => dispatch(finish(id))}
      onRemove={id => dispatch(remove(id))}
      onRevert={id => dispatch(revert(id))}
      onEdit={(id, title) => {
        const text = prompt('Введите новое название', title);
        if (text) {
          dispatch(edit({ id, title: text }));
        }
      }}
    />
  );
};
