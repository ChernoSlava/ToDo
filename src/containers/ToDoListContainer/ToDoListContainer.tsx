import React, { useEffect } from 'react';
import { List } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrent,
  getToDoListContainerProps,
  openPopup,
  loadToDoList,
  AppDispatch,
  finishToDoList,
  revertToDoList
} from '@store';

export const ToDoListContainer = () => {
  const { items } = useSelector(getToDoListContainerProps);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadToDoList());

  }, [dispatch]);
  return (
    <List
      items={items}

      onFinish={id =>
        dispatch(finishToDoList(id))
      }

      onRemove={
        (id) => {
          dispatch(
            setCurrent({
              id
            }),
          );
          dispatch(openPopup('remove'))
        }}

      onRevert={
        id =>
          dispatch(revertToDoList(id))
      }

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
