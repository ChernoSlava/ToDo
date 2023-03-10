import { LoadingState } from '@constants';
import React from 'react';
// Описываем один элемент в todo
export type ToDoItemType = {
  id: string;
  title: string;
  isFinish: boolean;
};

// Описываем список элементов и используем в компоненте (list)
export type ToDoListType = Array<ToDoItemType>;

// Тип для глобального стора приложения (использую в reducer, InitialTodoList)
export type ToDoStateType = {
  items: ToDoListType;
  loading: LoadingState;
};

export type PopupsStateType = {
  opened: Array<string>;
};

// Описываем действия нашего приложения при вызове dispatch и при описании reducer
export enum ActionType {
  edit = 'EDIT',
  remove = 'REMOVE',
  finish = 'FINISH',
  revert = 'REVERT',
  add = 'ADD',
}

// Описываем действие редактирования
export type EditAction = {
  // Конкретизируем тип действия может быть только edit
  type: ActionType.edit;
  // Выбираем из ToDoItemType только id and title
  payload: Pick<ToDoItemType, 'id' | 'title'>;
};

// Описываем действие добавления
export type AddAction = {
  type: ActionType.add;
  payload: ToDoItemType;
};

// Описываем действия remove, finish and revert
export type IdAction = {
  // Конкретизируем типы действия могут быть 3 actions
  type: ActionType.remove | ActionType.finish | ActionType.revert;
  payload: string;
};

// Собираем все типы действия в один тип. (используется в reducer)
export type Action = EditAction | AddAction | IdAction;

// Описываем тип для контекста приложения (используем в context)
export type ToDoContextType = {
  dispatch: React.Dispatch<Action>;
  state: ToDoStateType;
};
