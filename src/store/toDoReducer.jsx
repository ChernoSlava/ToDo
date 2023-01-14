import { actionType } from '@constants';

export const ToDoListReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        
        case actionType.edit: {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  title: x.id === payload.id ? payload.title : x.title  
                }))
            };
        }
        //dispatch({type: 'REMOVE', payload: 1 })
        case actionType.remove: {
            return {
                ...state,
                // 1, 2, 3 => 2, 3
                items: state.items.filter(x => x.id !== payload)

            };
        }
        //dispatch({type: 'FINISH', payload: 1 })
        case actionType.finish: {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  isFinish: x.id === payload ? true : x.isFinish  
                }))
                 
            };
        }
        //dispatch({type: 'REVERT', payload: 1 })
        case actionType.revert: {
            return {
                ...state,
                items: state.items.map(x => ({
                  ...x, 
                  isFinish: x.id === payload ? false : x.isFinish  
                }))
                 
            };
        }
        //dispatch({type: 'ADD', payload: { title: 'buy popuga food', id: 1, isDone: false}})
        case actionType.add: {
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

export const InitialTodoList = {
    //Список дел
    // { title: 'buy popuga food', id: 1, isDone: false}
    items: [] 

}