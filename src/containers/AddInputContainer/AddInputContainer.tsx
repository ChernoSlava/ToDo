import React from 'react';
import { AddInput } from '@components';
import { useDispatch } from 'react-redux';
import { addTodoItem } from '@store';

export const AddInputContainer = () => {
  const dispatch = useDispatch();
  return (
    <AddInput
      onAdd={value => {
        dispatch(addTodoItem(value));
      }}
    />
  );
};
