import React from 'react';
import { List } from '@components';
import { ActionType } from '@types';
import { useDispatch, useSelector } from 'react-redux';
import { finish, remove, revert, edit } from '@store';
import { getToDoListContainerProps } from 'src/store/selectors';

export const ToDoListContainer = () => {
  const { items } = useSelector(getToDoListContainerProps);
  const dispatch = useDispatch();
  return (
    <List
      items={items}
      onFinish={id => dispatch({ type: ActionType.finish, payload: id })}
      onRemove={id => dispatch({ type: ActionType.remove, payload: id })}
      onRevert={id => dispatch({ type: ActionType.revert, payload: id })}
      onEdit={(id, title) => {
        const text = prompt('Введите новое название', title);
        if (text) {
          dispatch({ type: ActionType.edit, payload: { id, title: text } });
        }
      }}
    />
  );
};
