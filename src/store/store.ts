import { configureStore } from '@reduxjs/toolkit';
import { InitialPopup, PopupReducer } from './PopupSlice';
import { ToDoSliceReducer, InitialToDo } from './ToDoSlice';

export const store = configureStore({
  reducer: {
    todo: ToDoSliceReducer,
    popups: PopupReducer,
  },
  preloadedState: {
    todo: InitialToDo,
    popups: InitialPopup,
  },
});

export type RootState = ReturnType<typeof store.getState>;
