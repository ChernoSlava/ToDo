import { configureStore } from '@reduxjs/toolkit';
import { ToDoSliceReducer, InitialToDo } from './ToDoSlice';

export const store = configureStore({
  reducer: ToDoSliceReducer,
  preloadedState: InitialToDo,
});

export type RootState = ReturnType<typeof store.getState>;
