import React, {useContext} from "react";
import {List }from '@components';
import { ToDoContext } from "@contexts";

export const ToDoListContainer = () => {
     const { state, dispatch } = useContext(ToDoContext);
    return (
        <List 
        items={state.items}
        onFinish={(id) => dispatch({ type: 'FINISH', payload: id})}
        onRemove={(id) => dispatch({ type: 'REMOVE', payload: id})}
        onRevert={(id) => dispatch({ type: 'REVERT', payload: id})}
        onEdit={(id, title) => {
            const text = prompt('Введите новое название', title);
            if (text) {
                dispatch({ type: 'EDIT', payload: { id, title: text }})
            }
        }}/>
    )
}