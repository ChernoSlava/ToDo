import React, {useContext} from "react";
import {List }from '@components';
import { ToDoContext } from "@contexts";
import { actionType } from "@constants";

export const ToDoListContainer = () => {
     const { state, dispatch } = useContext(ToDoContext);
    return (
        <List 
        items={state.items}
        onFinish={(id) => dispatch({ type: actionType.finish, payload: id})}
        onRemove={(id) => dispatch({ type: actionType.remove, payload: id})}
        onRevert={(id) => dispatch({ type: actionType.revert, payload: id})}
        onEdit={(id, title) => {
            const text = prompt('Введите новое название', title);
            if (text) {
                dispatch({ type: actionType.edit, payload: { id, title: text }})
            }
        }}/>
    )
}