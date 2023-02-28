import { PopupStateType } from '@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const InitialPopup: PopupStateType = {
  opened: [],
};

export const PopupSlice = createSlice({
  name: 'ToDo_List_Popup',
  initialState: InitialPopup,
  reducers: {
    openPopup: (state: PopupStateType, action: PayloadAction<string>) => {
      state.opened.push(action.payload);
    },
    closePopup: (state: PopupStateType, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.opened = state.opened.filter(x => x !== action.payload);
    },
  },
});

export const { openPopup, closePopup } = PopupSlice.actions;

const { reducer: PopupReducer } = PopupSlice;
export { PopupReducer };
