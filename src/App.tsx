import React from 'react';
import { Provider } from 'react-redux';
import {
  AddInputContainer,
  LoaderContainer,
  ToDoListContainer,
} from '@containers';
import { GlobalStyles } from '@GlobalStyles';
import { ThemeProvider } from 'styled-components';
import styles from './App.css';
import { store } from './store';
import { theme } from './theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className={styles.App}>
          <AddInputContainer />
          <ToDoListContainer />
          <LoaderContainer />
        </div>
      </ThemeProvider>
    </Provider>
  );
};
