/* eslint-disable no-param-reassign */
import {
  ToDoStateType,  ToDoItemType,
} from '@types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@constants';
import { closePopup } from './PopupSlice';

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
);

export const editToDoItem = createAsyncThunk(
  '@todo/edit',
  async ({ title, id }: { title: string, id: string }, { dispatch }) => {
    const response = await fetch('/api/v1/todo/edit', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        id
      })
    });

    if (response.ok) {
      dispatch(closePopup('edit'));
      dispatch(setCurrent(null));
      return { id, title };
    }

    throw new Error('Error get todo list.')
  }
);

export const finishToDoList = createAsyncThunk(
  '@todo/finish',
  async (id: string) => {
    const response = await fetch('/api/v1/todo/finish', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });

    if (response.ok) {
      return id;
    }

    throw new Error('Error get todo list.')
  }
);

export const removeToDoList = createAsyncThunk(
  '@todo/remove',
  async (id: string) => {
    const response = await fetch('/api/v1/todo', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });

    if (response.ok) {
      return id;
    }

    throw new Error('Error get todo list.')
  }
);

export const revertToDoList = createAsyncThunk(
  '@todo/revert',
  async (id: string) => {
    const response = await fetch('/api/v1/todo/revert', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });

    if (response.ok) {
      return id;
    }

    throw new Error('Error get todo list.')
  }
);

export const ToDoSlice = createSlice({
  name: 'ToDo_List',
  initialState: InitialToDo,
  reducers: {

    setLoadingState: (state: ToDoStateType, action: PayloadAction<LoadingState>) => {
      state.loading = action.payload;
    },
    setCurrent: (state: ToDoStateType, action: PayloadAction<ToDoItemType>) => {
      state.current = action.payload;
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

    builder.addCase(editToDoItem.pending, state => {
      state.loading = LoadingState.Pending;
    });
    builder.addCase(editToDoItem.fulfilled, (state, action) => {
      state.loading = LoadingState.Success;
      state.items = state.items.map(x => ({
        ...x,
        title: x.id === action.payload.id ? action.payload.title : x.title,
      }));
    });
    builder.addCase(editToDoItem.rejected, state => {
      state.loading = LoadingState.Fail;
    });

    builder.addCase(finishToDoList.pending, state => {
      state.loading = LoadingState.Pending;
    });
    builder.addCase(finishToDoList.fulfilled, (state, action) => {
      state.loading = LoadingState.Success;
      state.items = state.items.map(x => ({
        ...x,
        isFinish: x.id === action.payload ? true : x.isFinish,
      }));
    });
    builder.addCase(finishToDoList.rejected, state => {
      state.loading = LoadingState.Fail;
    });

    builder.addCase(removeToDoList.pending, state => {
      state.loading = LoadingState.Pending;
    });
    builder.addCase(removeToDoList.fulfilled, (state, action) => {
      state.loading = LoadingState.Success;
      state.items = state.items.filter(x => x.id !== action.payload);
    });
    builder.addCase(removeToDoList.rejected, state => {
      state.loading = LoadingState.Fail;
    });

    builder.addCase(revertToDoList.pending, state => {
      state.loading = LoadingState.Pending;
    });
    builder.addCase(revertToDoList.fulfilled, (state, action) => {
      state.loading = LoadingState.Success;
      state.items = state.items.map(x => ({
        ...x,
        isFinish: x.id === action.payload ? false : x.isFinish,
      }));
    });
    builder.addCase(revertToDoList.rejected, state => {
      state.loading = LoadingState.Fail;
    });
  }
});

export const {
  setLoadingState,
  setCurrent
} = ToDoSlice.actions;

const { reducer: ToDoSliceReducer } = ToDoSlice;
export { ToDoSliceReducer };
