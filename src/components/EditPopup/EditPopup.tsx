import React, { useRef } from 'react';
import { Popup } from '../Popup';

export const EditPopup: React.FC<{
  onApply: (value: string) => void;
  onCancel: () => void;
  value: string;
}> = ({ onApply, onCancel, value }) => {
  const inputRef = useRef(null);

  return (
    <Popup
      content={<input type="text" defaultValue={value} ref={inputRef} />}
      footer={
        <>
          <button type="button" onClick={() => onApply(inputRef.current.value)}>
            Okey
          </button>
          <button type="button" onClick={onCancel}>
            Отмена
          </button>
        </>
      }
    />
  );
};
