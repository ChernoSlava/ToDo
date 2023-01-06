import React from "react";

export const ToDoContextInitialValue = {
    state: {
        items: []
    },
    dispatch: () => {},
}
export const ToDoContext = React.createContext(ToDoContextInitialValue);