import React, { useEffect } from 'react';
import { List } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import {
  finish,
  remove,
  revert,
  setCurrent,
  getToDoListContainerProps,
  openPopup,
  loadToDoList,
  AppDispatch
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

      onFinish={id => fetch('/api/v1/todo/finish', {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id
        })
      }).then(() => {
        dispatch(finish(id))
      })}
      
      onRemove={
        id =>
          fetch('/api/v1/todo', {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id
            })
          }).then(() => {
            dispatch(remove(id))
          })
      }

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
