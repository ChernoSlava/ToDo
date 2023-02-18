import React from 'react';
import { ToDoContextType } from '@types';

export const ToDoContextInitialValue: ToDoContextType = {
  state: {
    items: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
};
export const ToDoContext = React.createContext(ToDoContextInitialValue);
