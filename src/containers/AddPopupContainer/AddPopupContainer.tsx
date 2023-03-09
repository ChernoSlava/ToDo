import { closePopup, setCurrent, add } from '@store';
import React from 'react';
import { getUniqueId } from '@utils';

import { useDispatch, useSelector } from 'react-redux';
import { AddPopup } from '../../components/AddPopup';
import { getAddPopupContainerProps } from '../../store/selectors';
import { ToDoItemType } from '@types';

export const AddPopupContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { isShow } = useSelector(getAddPopupContainerProps);
  return (
    isShow && (
      <AddPopup
        onApply={text => {
          if (!text) {
            return
          }
          fetch('/api/v1/todo', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: text,
            })
          })
            .then(res => res.json())
            .then(json => {
              dispatch(add({ title: text, isFinish: false, id: (json as ToDoItemType).id }));
              dispatch(closePopup('add'));
              dispatch(setCurrent(null));
          })
          
        }}
        onCancel={() => {
          dispatch(closePopup('add'));
          dispatch(setCurrent(null));
        }}
      />
    )
  );
};
