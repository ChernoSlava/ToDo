import React, { useRef } from 'react';
import { Popup } from '../Popup';
import { AddPupupInput, AddPupupButton } from './styled';

export const AddPopup: React.FC<{
  onApply: (value: string) => void;
  onCancel: () => void;
}> = ({ onApply, onCancel }) => {
  const inputRef = useRef(null);

  return (
    <Popup
      content={<AddPupupInput type="text" defaultValue="" ref={inputRef} />}
      footer={
        <>
          <AddPupupButton
            type="button"
            onClick={() => onApply(inputRef.current.value)}>
            Okey
          </AddPupupButton>
          <AddPupupButton type="button" onClick={onCancel}>
            Отмена
          </AddPupupButton>
        </>
      }
    />
  );
};
