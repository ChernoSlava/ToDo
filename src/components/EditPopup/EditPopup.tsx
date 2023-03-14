import React, { useRef } from 'react';
import { Popup } from '../Popup';
import { EditPopupInput, EditPopupButton } from './styled';

export const EditPopup: React.FC<{
  onApply: (value: string) => void;
  onCancel: () => void;
  value: string;
}> = ({ onApply, onCancel, value }) => {
  const inputRef = useRef(null);

  return (
    <Popup
      content={
        <EditPopupInput type="text" defaultValue={value} ref={inputRef} />
      }
      footer={
        <>
          <EditPopupButton
            type="button"
            onClick={() => onApply(inputRef.current.value)}>
            Okey
          </EditPopupButton>
          <EditPopupButton type="button" onClick={onCancel}>
            Отмена
          </EditPopupButton>
        </>
      }
    />
  );
};
