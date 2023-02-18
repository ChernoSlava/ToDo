import React, { useContext } from "react";
import { List }from '@components';
import type { RootState } from '@store';
import { ActionType } from "@types";
import { useSelector, useDispatch } from 'react-redux';
import { finish, remove, revert, edit } from '@store';

export const ToDoListContainer = () => {
  const state = useSelector((state: RootState ) => state.items)
  const dispatch = useDispatch()
    return (
        <List 
        items={state}
        onFinish={(id) => dispatch({ type: ActionType.finish, payload: id})}
        onRemove={(id) => dispatch({ type: ActionType.remove, payload: id})}
        onRevert={(id) => dispatch({ type: ActionType.revert, payload: id})}
        onEdit={(id, title) => {
            const text = prompt('Введите новое название', title);
            if (text) {
                dispatch({ type: ActionType.edit, payload: { id, title: text }})
            }
        }}/>
    )
}