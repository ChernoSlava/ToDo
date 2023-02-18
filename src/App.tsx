import React from 'react';
import { Provider } from 'react-redux';
import { AddInputContainer, ToDoListContainer } from '@containers';
import styles from './App.css';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <AddInputContainer />
        <ToDoListContainer />
      </div>
    </Provider>
  );
};
