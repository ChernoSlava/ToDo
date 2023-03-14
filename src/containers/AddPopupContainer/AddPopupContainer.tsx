import { 
  closePopup, 
  setCurrent, 
  addToDoItem, 
  AppDispatch 
} from '@store';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AddPopup } from '../../components/AddPopup';
import { getAddPopupContainerProps } from '../../store/selectors';

export const AddPopupContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isShow } = useSelector(getAddPopupContainerProps);
  return (
    isShow && (
      <AddPopup
        onApply={text => {
          if (!text) {
            return
          }
          dispatch(addToDoItem(text));
          dispatch(closePopup('add'));
          dispatch(setCurrent(null));
        }}
        onCancel={() => {
          dispatch(closePopup('add'));
          dispatch(setCurrent(null));
        }}
      />
    )
  );
};
