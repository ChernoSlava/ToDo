import React, {useContext} from "react";
import { AddInput } from "@components";
import { ToDoContext } from '@contexts';
import { getUniqueId } from '@utils';

export const AddInputContainer = () => {
    const { dispatch } = useContext(ToDoContext);

    return (
        <AddInput onAdd={(value) => dispatch({ type: 'ADD', payload: { title: value, isFinish: false, id: getUniqueId() } })} />
    )
}