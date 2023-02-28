import { configureStore } from '@reduxjs/toolkit';
import { ToDoSliceReducer, InitialToDo } from './ToDoSlice';
import { PopupReducer, InitialPopup } from './PopupSlice';

export const store = configureStore({
  reducer: {
    todo: ToDoSliceReducer,
    popup: PopupReducer,
  },
  preloadedState: {
    todo: InitialToDo,
    popup: InitialPopup,
  },
});

export type RootState = ReturnType<typeof store.getState>;
