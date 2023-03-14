import {
  closePopup,
  setCurrent,
  addToDoItem,
  AppDispatch,
  removeToDoList
} from '@store';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { DeletePopup } from '../../components/DeletePopup';
import { getDeletePopupContainerProps } from '../../store/selectors';

export const DeletePopupContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isShow, current } = useSelector(getDeletePopupContainerProps);
  return (
    isShow && (
      <DeletePopup
        value={current.id}
        onApply={() => {
          dispatch(removeToDoList(current.id));
          dispatch(closePopup('remove'));
          dispatch(setCurrent(null));
        }}
        onCancel={() => {
          dispatch(closePopup('remove'));
          dispatch(setCurrent(null));
        }}
      />
    )
  );
};
