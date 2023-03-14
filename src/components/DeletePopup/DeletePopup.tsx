import React from 'react';

import { Popup } from '../Popup';

import { DeletePopupButton, DeletePopupTitle } from './styled';

export const DeletePopup: React.FC<{
  onApply: (value: string) => void;
  onCancel: () => void;
  value: string
}> = ({ onApply, onCancel, value }): JSX.Element => {
  
  return (
    <Popup
      content={<DeletePopupTitle>Вы уверены, что хотите удалить заметку?</DeletePopupTitle>}
      footer={
        <>
          <DeletePopupButton
            type="button"
            onClick={() => onApply(value)}>
            Okey
          </DeletePopupButton>
          <DeletePopupButton type="button" onClick={onCancel}>
            Отмена
          </DeletePopupButton>
        </>
      }
    />
  );
};
