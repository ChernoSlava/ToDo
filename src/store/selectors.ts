import { createSelector } from '@reduxjs/toolkit';
import { LoadingState } from '@constants';
import { RootState } from './store';

export const getState = (state: RootState) => state;

export const getToDoState = createSelector([getState], state => {
  return state.todo;
});

export const getToDoLoadingState = createSelector([getToDoState], state => {
  return state.loading;
});

export const getToDoListContainerProps = createSelector(
  [getToDoState],
  state => {
    return { items: state.items };
  },
);

export const getLoaderContainerProps = createSelector(
  [getToDoLoadingState],
  loading => {
    return { isShow: loading === LoadingState.Pending };
  },
);

export const getPopupState = createSelector([getState], state => {
  return state.popups;
});
