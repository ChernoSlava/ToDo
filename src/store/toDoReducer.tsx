
import { ToDoStateType, Action, ActionType } from '@types';

export const ToDoListReducer = (state: ToDoStateType, action: Action): ToDoStateType => {
    const {type, payload} = action;

    switch (type) {
        
        case ActionType.edit: {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  title: x.id === payload.id ? payload.title : x.title  
                }))
            };
        }

        case ActionType.remove: {
            return {
                ...state,

                items: state.items.filter(x => x.id !== payload)

            };
        }

        case ActionType.finish: {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  isFinish: x.id === payload ? true : x.isFinish  
                }))
                 
            };
        }

        case ActionType.revert: {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  isFinish: x.id === payload ? false : x.isFinish  
                }))
                 
            };
        }

        case ActionType.add: {
            return {
                ...state,
                items: [
                    {

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

export const InitialTodoList: ToDoStateType = {
    //Список дел
    // { title: 'buy popuga food', id: 1, isDone: false}
    items: [] 

}