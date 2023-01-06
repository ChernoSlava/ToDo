import React, { useReducer } from "react";
import { ToDoContext } from "@contexts";

const ToDoListReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        //dispatch({type: 'EDIT', payload: { id: 1, title: 'buy cat food' }})
        case 'EDIT': {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  title: x.id === payload.id ? payload.title : x.title  
                }))
            };
        }
        //dispatch({type: 'REMOVE', payload: 1 })
        case 'REMOVE': {
            return {
                ...state,
                // 1, 2, 3 => 2, 3
                items: state.items.filter(x => x.id !== payload)

            };
        }
        //dispatch({type: 'FINISH', payload: 1 })
        case 'FINISH': {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  isFinish: x.id === payload ? true : x.isFinish  
                }))
                 
            };
        }
        //dispatch({type: 'ADD', payload: { title: 'buy popuga food', id: 1, isDone: false}})
        case 'ADD': {
            return {
                ...state,
                items: [
                    {
                        // title: payload.title...
                        ...payload,
                    },
                    ...state.items
                ]
            };
        }

        default: {
            return state;
        }
    }
}
const InitialTodoList = {
    //Список дел
    // { title: 'buy popuga food', id: 1, isDone: false}
    items: [] 

}

export const App = () => {
    const [state, dispatch] = useReducer(ToDoListReducer, InitialTodoList);
    return(
        <ToDoContext.Provider value={{
            state, dispatch
        }}>
            <div>
                I will be ToDo list 
            </div>
        </ToDoContext.Provider>
    )
}