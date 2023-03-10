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
);

export const addToDoItem = createAsyncThunk(
  '@todo/add',
  async (title: string) => {
    const response = await fetch('/api/v1/todo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
      })
    });

    if (response.ok) {
      const result = await response.json();

      return {
        title,
        isFinish: false,
        id: (result as ToDoItemType).id
      };
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

    builder.addCase(addToDoItem.pending, state => {
      state.loading = LoadingState.Pending;
    });
    builder.addCase(addToDoItem.fulfilled, (state, action) => {
      state.loading = LoadingState.Success;
      state.items.push(action.payload);
    });
    builder.addCase(addToDoItem.rejected, state => {
      state.loading = LoadingState.Fail;
    });
  }
});

export const {
  edit,
  remove,
  finish,
  revert,
  setLoadingState,
  setCurrent
} = ToDoSlice.actions;

const { reducer: ToDoSliceReducer } = ToDoSlice;
export { ToDoSliceReducer };
