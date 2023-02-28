import React from 'react';
import { ToDoListType } from '@types';
import { Button } from '../Button';
import { ListStyled, ListContainer, ListItemFinish } from './styled';
// items = { id, title, isFinish }
export const List: React.FC<{
  items: ToDoListType;
  onRemove: (id: string) => void;
  onFinish: (id: string) => void;
  onRevert: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}> = ({ items, onRemove, onEdit, onFinish, onRevert }) => {
  return (
    <ListStyled>
      {items?.map(x => (
        <ListContainer key={x.id}>
          <ListItemFinish isFinish={x.isFinish}>{x.title}</ListItemFinish>
          <div>
            {!x.isFinish && (
              <Button
                title="Редактировать"
                type="edit"
                onClick={() => onEdit(x.id, x.title)}
              />
            )}
            {!x.isFinish && (
              <Button
                title="Завершить"
                type="finish"
                onClick={() => onFinish(x.id)}
              />
            )}
            {x.isFinish && (
              <Button
                title="Вернуть"
                type="revert"
                onClick={() => onRevert(x.id)}
              />
            )}
            <Button
              title="Удалить"
              type="remove"
              onClick={() => onRemove(x.id)}
            />
          </div>
        </ListContainer>
      ))}
    </ListStyled>
  );
};
