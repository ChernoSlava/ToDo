/* eslint-disable no-param-reassign */
import {
  ToDoStateType,
  EditAction,
  AddAction,
  IdAction,
  ToDoItemType,
} from '@types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@constants';

export const InitialToDo: ToDoStateType = {
  items: [],
  current: null,
  loading: LoadingState.Idle,
};

export const loadToDoList = createAsyncThunk(
  '@todo/list/load',
  async () => {
    const response = await fetch('/api/v1/todo');

    if (response.ok) {
      const result = await response.json();

      return result.list;
    }

    throw new Error('Error get todo list.')
  }
)

export const ToDoSlice = createSlice({
  name: 'ToDo_List',
  initialState: InitialToDo,
  reducers: {

    setLoadingState: (state: ToDoStateType, action: PayloadAction<LoadingState>) => {
      state.loading = action.payload;
    },

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
      state.items = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(loadToDoList.pending, state => {
      state.loading = LoadingState.Pending;
    });
    builder.addCase(loadToDoList.fulfilled, (state, action) => {
      state.loading = LoadingState.Success;
      state.items = action.payload
    });
    builder.addCase(loadToDoList.rejected, state => {
      state.loading = LoadingState.Fail;
    });
  }
});

export const { edit, remove, finish, revert, add, load, setLoadingState, setCurrent } =
  ToDoSlice.actions;

const { reducer: ToDoSliceReducer } = ToDoSlice;
export { ToDoSliceReducer };
