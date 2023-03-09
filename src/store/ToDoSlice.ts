/* eslint-disable no-param-reassign */
import {
  ToDoStateType,
  EditAction,
  AddAction,
  IdAction,
  ToDoItemType,
} from '@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const InitialToDo: ToDoStateType = {
  items: [],
  current: null,
};

export const ToDoSlice = createSlice({
  name: 'ToDo_List',
  initialState: InitialToDo,
  reducers: {
    edit: (state: ToDoStateType, action: EditAction) => {
      state.items = state.items.map(x => ({
        ...x,
        title: x.id === action.payload.id ? action.payload.title : x.title,
      }));
    },
    setCurrent: (state: ToDoStateType, action: PayloadAction<ToDoItemType>) => {
      state.current = action.payload;
    },
    remove: (state: ToDoStateType, action: IdAction) => {
      state.items = state.items.filter(x => x.id !== action.payload);
    },
    finish: (state: ToDoStateType, action: IdAction) => {
      state.items = state.items.map(x => ({
        ...x,
        isFinish: x.id === action.payload ? true : x.isFinish,
      }));
    },
    revert: (state: ToDoStateType, action: IdAction) => {
      state.items = state.items.map(x => ({
        ...x,
        isFinish: x.id === action.payload ? false : x.isFinish,
      }));
    },

    add: (state: ToDoStateType, action: AddAction) => {
      state.items.push(action.payload);
    },
    load: (state: ToDoStateType, action: PayloadAction<Array<ToDoItemType>>) => {
      state.items= action.payload;
    },
  },
});

export const { edit, remove, finish, revert, add, load, setCurrent } =
  ToDoSlice.actions;

const { reducer: ToDoSliceReducer } = ToDoSlice;
export { ToDoSliceReducer };
