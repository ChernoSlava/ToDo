import React from 'react';
import { AddInput } from '@components';
import { getUniqueId } from '@utils';
import { useDispatch } from 'react-redux';
import { add } from '@store';

export const AddInputContainer = () => {
  const dispatch = useDispatch();
  return (
    <AddInput
      onAdd={value =>
        dispatch(add({ title: value, isFinish: false, id: getUniqueId() }))
      }
    />
  );
};
