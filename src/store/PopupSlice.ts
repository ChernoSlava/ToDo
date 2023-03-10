/* eslint-disable no-param-reassign */
import { PopupsStateType } from '@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const InitialPopup: PopupsStateType = {
  opened: [],
};

export const PopupSlice = createSlice({
  name: 'ToDo_List_Popups',
  initialState: InitialPopup,
  reducers: {
    openPopup: (state: PopupsStateType, action: PayloadAction<string>) => {
      state.opened.push(action.payload);
    },
    closePopup: (state: PopupsStateType, action: PayloadAction<string>) => {
      state.opened = state.opened.filter(x => x !== action.payload);
    },
  },
});

export const { openPopup, closePopup } = PopupSlice.actions;

const { reducer: PopupReducer } = PopupSlice;
export { PopupReducer };
