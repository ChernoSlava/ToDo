import { LoadingState } from "@constants";
import { addToDoItem, InitialToDo, loadToDoList, ToDoSliceReducer, editToDoItem } from "../ToDoSlice"
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock, { FetchMock } from 'jest-fetch-mock';

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

describe('ToDoSlice test', () => {

  beforeEach(() => {
    fetchMock.doMock();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });
  //Tests for loadToDoList all
  describe('loadToDoList tests', () => {
    // Async loadToDoList function tests
    it('should success', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(JSON.stringify({
        list: [{ id: 1 }]
      }), {
        status: 200,
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await loadToDoList());

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo');

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [
          propertyMatcherItem, propertyMatcherItem]
      });
    });

    it('should fail', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(JSON.stringify({
        list: [{ id: 1 }]
      }), {
        status: 500,
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await loadToDoList());

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo');

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [
          propertyMatcherItem, propertyErrorMatcherItem]
      });
    });
    // extraReducer tests for loadToDoList
    it('should loadToDoList.pending change store correctly', () => {
      expect(ToDoSliceReducer(InitialToDo, { type: loadToDoList.pending.type }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Pending,
      });
    });
    it('should loadToDoList.reject change store correctly', () => {
      expect(ToDoSliceReducer(InitialToDo, { type: loadToDoList.rejected.type }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Fail,
      });
    });

    it('should loadToDoList.fulfild change store correctly', () => {
      expect(ToDoSliceReducer(InitialToDo, { type: loadToDoList.fulfilled.type, payload: [{}] }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Success,
        items: [{}],
      });
    });
  });

  describe('addToDoList tests', () => {
    it('should success', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(JSON.stringify({
        id: 100
      }), {
        status: 200,
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await addToDoItem('item 1'));

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo',
        {
          "body": "{\"title\":\"item 1\"}",
          "headers": { "Content-Type": "application/json" },
          "method": "POST"
        });

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [
          propertyMatcherItem, propertyMatcherItem]
      });
    });
    it('should fail', async () => {
      const store = mockStore({ ...InitialToDo });

      (fetch as FetchMock).mockResponse(JSON.stringify({
        id: 100
      }), {
        status: 500,
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await store.dispatch(await addToDoItem('item 1'));

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith('/api/v1/todo',
        {
          "body": "{\"title\":\"item 1\"}",
          "headers": { "Content-Type": "application/json" },
          "method": "POST"
        });

      const actions = store.getActions();

      expect({ actions }).toMatchSnapshot({
        actions: [
          propertyMatcherItem, propertyErrorMatcherItem]
      });
    });

    // extraReducer tests for addToDoItem
    it('should addToDoItem.pending change store correctly', () => {
      expect(ToDoSliceReducer(InitialToDo, { type: addToDoItem.pending.type }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Pending,
      });
    });
    it('should addToDOList.reject change store correctly', () => {
      expect(ToDoSliceReducer(InitialToDo, { type: addToDoItem.rejected.type }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Fail,
      });
    });

    it('should loadToDoList.fulfild change store correctly', () => {
      expect(ToDoSliceReducer(InitialToDo, {
        type: addToDoItem.fulfilled.type, payload: {
          title: 'as',
          isFinish: false,
          id: 'as',
        }
      }),
      ).toEqual({
        ...InitialToDo,
        loading: LoadingState.Success,
        items: [{
          title: 'as',
          isFinish: false,
          id: 'as',
        }],
      });
    });
  });

  // describe('editToDoItem tests', () => {
  //   it('should success', async () => {
  //     const store = mockStore({ ...InitialToDo });

  //     (fetch as FetchMock).mockResponse(JSON.stringify({
  //       title: 'a',
  //       id: 100,
  //     }), {
  //       status: 200,
  //     });

  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     await store.dispatch(await editToDoItem({ title: 'a', id: 100, }));

  //     expect(fetch).toBeCalledTimes(1);
  //     expect(fetch).toBeCalledWith('/api/v1/todo/edit',
  //       {
  //         "body": "{\"title\":\"a\",\"id\":100}",
  //         "headers": { "Content-Type": "application/json" },
  //         "method": 'PATCH'
  //       });

  //     const actions = store.getActions();

  //     expect({ actions }).toMatchSnapshot({
  //       actions: [
  //         propertyMatcherItem, propertyMatcherItem]
  //     });
  //   });
  //   it('should fail', async () => {
  //     const store = mockStore({ ...InitialToDo });

  //     (fetch as FetchMock).mockResponse(JSON.stringify({
  //       id: 100
  //     }), {
  //       status: 500,
  //     });

  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     await store.dispatch(await editToDoItem('item 1'));

  //     expect(fetch).toBeCalledTimes(1);
  //     expect(fetch).toBeCalledWith('/api/v1/todo/edit',
  //       {
  //         "body": "{\"title\":\"item 1\"}",
  //         "headers": { "Content-Type": "application/json" },
  //         "method": 'PATCH'
  //       });

  //     const actions = store.getActions();

  //     expect({ actions }).toMatchSnapshot({
  //       actions: [
  //         propertyMatcherItem, propertyErrorMatcherItem]
  //     });
  //   });
  // });

})