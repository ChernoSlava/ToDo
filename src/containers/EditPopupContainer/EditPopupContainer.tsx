import { AppDispatch, closePopup, editToDoItem, setCurrent } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditPopup } from '../../components/EditPopup';
import { getEditPopupContainerProps } from '../../store/selectors';

export const EditPopupContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isShow, current } = useSelector(getEditPopupContainerProps);
  return (
    isShow && (
      <EditPopup
        value={current.title}
        onApply={text => {
          if (text) {
            dispatch(editToDoItem({ title: text, id: current.id }))
          }
        }}
        onCancel={() => {
          dispatch(closePopup('edit'));
          dispatch(setCurrent(null));
        }}
      />
    )
  );
};
