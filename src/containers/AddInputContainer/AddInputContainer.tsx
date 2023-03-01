import React from 'react';
import { AddInput } from '@components';
import { useDispatch } from 'react-redux';
import { openPopup } from '@store';

export const AddInputContainer = () => {
  const dispatch = useDispatch();
  return (
    <AddInput
      onAdd={() => {
        dispatch(openPopup('add'));
      }}
      // onAdd={value => {
      //   dispatch(openPopup('add'));
      //   dispatch(add({ title: value, isFinish: false, id: getUniqueId() }));
      // }}
    />
  );
};
