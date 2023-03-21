/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { LoadingState } from '@constants';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock, { FetchMock } from 'jest-fetch-mock';
import {
  InitialToDo,
  ToDoSliceReducer,
  addTodoItem,
  loadTodoList,
} from '../ToDoSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const propertyMatcherItem = {
  meta: {
    requestId: expect.any(String),
  },
};

const propertyErrorMatcherItem = {
  ...propertyMatcherItem,
  error: {
    stack: expect.any(String),
  },
};

describe('ToDoSlice tests', () => {
  beforeEach(() => {
    fetchMock.doMock();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  describe('loadTodoList tests', () => {
    it('should success', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(
        JSON.stringify({
          list: [{ id: 1 }],
        }),
        {
          status: 200,
        },
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await loadTodoList());

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo');

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [propertyMatcherItem, propertyMatcherItem],
      });
    });

    it('should fail', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(
        JSON.stringify({
          list: [{ id: 1 }],
        }),
        {
          status: 500,
        },
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await loadTodoList());

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo');

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [propertyMatcherItem, propertyErrorMatcherItem],
      });
    });

    it('should loadTodoList.pending change store correctly', () => {
      expect(
        ToDoSliceReducer(InitialToDo, { type: loadTodoList.pending.type }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Pending,
      });
    });

    it('should loadTodoList.rejected change store correctly', () => {
      expect(
        ToDoSliceReducer(InitialToDo, { type: loadTodoList.rejected.type }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Fail,
      });
    });

    it('should loadTodoList.fulfilled change store correctly', () => {
      expect(
        ToDoSliceReducer(InitialToDo, {
          type: loadTodoList.fulfilled.type,
          payload: [{}],
        }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Success,
        items: [{}],
      });
    });
  });

  describe('addTodoItem tests', () => {
    it('should success', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(
        JSON.stringify({
          id: 100,
        }),
        {
          status: 200,
        },
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await addTodoItem('item 1'));

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo', {
        body: '{"title":"item 1"}',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [propertyMatcherItem, propertyMatcherItem],
      });
    });
  });
});
