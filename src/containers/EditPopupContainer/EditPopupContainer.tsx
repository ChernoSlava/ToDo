import { closePopup, edit, setCurrent } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditPopup } from '../../components/EditPopup';
import { getEditPopupContainerProps } from '../../store/selectors';

export const EditPopupContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { isShow, current } = useSelector(getEditPopupContainerProps);
  return (
    isShow && (
      <EditPopup
        value={current.title}
        onApply={text => {
          if (text) {
            dispatch(edit({ id: current.id, title: text }));
          }
          dispatch(closePopup('edit'));
          dispatch(setCurrent(null));
        }}
        onCancel={() => {
          dispatch(closePopup('edit'));
          dispatch(setCurrent(null));
        }}
      />
    )
  );
};
