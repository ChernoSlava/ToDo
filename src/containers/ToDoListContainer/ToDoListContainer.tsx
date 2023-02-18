import React, { useContext } from 'react';
import { List } from '@components';
import { ToDoContext } from '@contexts';
import { ActionType } from '@types';

export const ToDoListContainer = () => {
  const { state, dispatch } = useContext(ToDoContext);
  return (
    <List
      items={state.items}
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
