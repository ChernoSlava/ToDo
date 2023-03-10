import { LoadingState } from '@constants';
import { createSelector } from '@reduxjs/toolkit';
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

export const getPopupState = createSelector([getState], state => {
  return state.popup;
});

export const getOpenedPopups = createSelector([getPopupState], state => {
  return state.opened;
});

export const getCurrent = createSelector([getToDoState], state => {
  return state.current;
});

export const getEditPopupContainerProps = createSelector(
  [getOpenedPopups, getCurrent],
  (opened, current) => {
    return {
      isShow: opened.includes('edit'),
      current,
    };
  },
);

export const getAddPopupContainerProps = createSelector(
  [getOpenedPopups],
  opened => {
    return {
      isShow: opened.includes('add'),
    };
  },
);

export const getDeletePopupContainerProps = createSelector(
  [getOpenedPopups, getCurrent],
  (opened, current) => {
    return {
      isShow: opened.includes('remove'),
      current,
    };
  },
);

export const getLoaderContainerProps = createSelector(
  [getToDoLoadingState],
  loading => {
    return {
      isShow: loading === LoadingState.Pending
    };
  },
);
