import React, { useState } from 'react';

import { Button } from '../Button';

import { AddInputStyled } from './styled';

// type - add, remove, edit, done
export const AddInput: React.FC<{
  onAdd: (value: string) => void;
}> = ({ onAdd }): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <AddInputStyled>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <Button
        title="Добавить"
        type="add"
        onClick={() => onAdd(value)}
        isDisabled={!value}
      />
    </AddInputStyled>
  );
};
