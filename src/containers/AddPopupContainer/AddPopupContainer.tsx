import { closePopup, setCurrent, add } from '@store';
import React from 'react';
import { getUniqueId } from '@utils';

import { useDispatch, useSelector } from 'react-redux';
import { AddPopup } from '../../components/AddPopup';
import { getAddPopupContainerProps } from '../../store/selectors';

export const AddPopupContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { isShow } = useSelector(getAddPopupContainerProps);
  return (
    isShow && (
      <AddPopup
        onApply={text => {
          if (text) {
            dispatch(add({ title: text, isFinish: false, id: getUniqueId() }));
          }
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
