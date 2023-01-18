import React from "react";
import { ToDoContextType } from '@types';

export const ToDoContextInitialValue: ToDoContextType = {
    state: {
        items: []
    },
    dispatch: () => {},
}
export const ToDoContext = React.createContext(ToDoContextInitialValue);