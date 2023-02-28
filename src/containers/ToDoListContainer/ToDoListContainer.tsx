import React from 'react';
import { List } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import {
  finish,
  remove,
  revert,
  setCurrent,
  getToDoListContainerProps,
  openPopup,
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
        dispatch(
          setCurrent({
            id,
            title,
            isFinish: false,
          }),
        );
        dispatch(openPopup('edit'));
      }}
    />
  );
};
