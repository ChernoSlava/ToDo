import React, { useRef } from 'react';
import { Popup } from '../Popup';
import { EditPupupInput, EditPupupButton } from './styled';

export const EditPopup: React.FC<{
  onApply: (value: string) => void;
  onCancel: () => void;
  value: string;
}> = ({ onApply, onCancel, value }) => {
  const inputRef = useRef(null);

  return (
    <Popup
      content={
        <EditPupupInput type="text" defaultValue={value} ref={inputRef} />
      }
      footer={
        <>
          <EditPupupButton
            type="button"
            onClick={() => onApply(inputRef.current.value)}>
            Okey
          </EditPupupButton>
          <EditPupupButton type="button" onClick={onCancel}>
            Отмена
          </EditPupupButton>
        </>
      }
    />
  );
};
