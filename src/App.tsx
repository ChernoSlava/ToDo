import React from 'react';
import { Provider } from 'react-redux';
import { AddInputContainer, ToDoListContainer } from '@containers';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AppStyled } from './styled';
import { store } from './store';
import { GlobalStyles } from './styles/GlobalStyles';
import { EditPopupContainer } from './containers/EditPopupContainer';
import { AddPopupContainer } from './containers/AddPopupContainer';
import { LoaderContainer } from './containers/LoaderContainer';
export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppStyled>
          <AddInputContainer />
          <ToDoListContainer />
          <EditPopupContainer />
          <AddPopupContainer />
          <LoaderContainer />
        </AppStyled>
      </ThemeProvider>
    </Provider>
  );
};
