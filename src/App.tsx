import React from 'react';
import { Provider } from 'react-redux';
import { AddInputContainer, ToDoListContainer } from '@containers';
import { ThemeProvider } from 'styled-components';
import styles from './App.css';
import { store } from './store';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className={styles.App}>
          <AddInputContainer />
          <ToDoListContainer />
        </div>
      </ThemeProvider>
    </Provider>
  );
};
