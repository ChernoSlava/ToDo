import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const getState = (state: RootState) => state;

export const getToDoListContainerProps = createSelector([getState], state => {
  return { items: state.items };
});
