import { ToDoStateType, Action, EditAction, AddAction } from '@types';
import { createSlice } from '@reduxjs/toolkit';

export const InitialToDo: ToDoStateType = {
  items: [],
};

export const ToDoSlice = createSlice({
  name: 'ToDo_List',
  initialState: InitialToDo,
  reducers: {
    edit: (state: ToDoStateType, action: EditAction) => {
      state.items.map(x => ({
        ...x,
        title: x.id === action.payload.id ? action.payload.title : x.title
      }))
    },
    remove: (state: ToDoStateType, action: Action) => {
      state.items.filter(x => x.id !== action.payload)
    },
    finish: (state: ToDoStateType, action: Action) => {
      state.items.map(x => ({
        ...x,
        isFinish: x.id === action.payload ? true : x.isFinish
      }))
    },
    revert: (state: ToDoStateType, action: Action) => {
      state.items.map(x => ({
        ...x,
        isFinish: x.id === action.payload ? false : x.isFinish
      }))
    },

    add:
      (state: ToDoStateType, action: AddAction) => {
        state.items.push(action.payload)
      }

  },
});

export const { edit, remove, finish, revert, add } = ToDoSlice.actions;


const { reducer: ToDoSliceReducer } = ToDoSlice;
export { ToDoSliceReducer };
