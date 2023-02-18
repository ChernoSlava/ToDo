import React from 'react';
import { ToDoListType } from '@types';
import { Button } from '../Button';
import styles from './List.css';

// items = { id, title, isFinish }
export const List: React.FC<{
  items: ToDoListType;
  onRemove: (id: string) => void;
  onFinish: (id: string) => void;
  onRevert: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}> = ({ items, onRemove, onEdit, onFinish, onRevert }) => {
  return (
    <div className={styles.List}>
      {items?.map(x => (
        <div key={x.id} className={styles.list__container}>
          <div className={`${x.isFinish ? styles.ListItem_finish : ''}`}>
            {x.title}
          </div>
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
        </div>
      ))}
    </div>
  );
};
