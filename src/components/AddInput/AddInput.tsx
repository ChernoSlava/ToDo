import React from 'react';

import { Button } from '../Button';

import { AddInputStyled, AddInputTitle } from './styled';

// type - add, remove, edit, done
export const AddInput: React.FC<{
  onAdd: () => void;
}> = ({ onAdd }): JSX.Element => {
  return (
    <AddInputStyled>
      <AddInputTitle>Нажми на плюс</AddInputTitle>
      <Button title="Добавить" type="add" onClick={() => onAdd()} />
    </AddInputStyled>
  );
};
