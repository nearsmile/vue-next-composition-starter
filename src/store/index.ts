import { createStore } from 'vuex';

interface Todo {
  id: string;
  content: string;
  status: boolean; // 完成 未完成
}
interface State {
  token: string;
  count: number;
  todoList: Todo[];
}

const state: State = {
  token: '79faf82271944fe38c4f1d99be71bc9c',
  count: 10,
  todoList: []
};

interface Getter<T> {
  (state: T): any;
}
interface Getters<T> {
  [key: string]: Getter<T>;
}

const getters: Getters<State> = {
  token: state => state.token,
  count: state => state.count,
  todoList: state => state.todoList
};

interface Mutation<T> {
  (state: T, payload: any): any;
}
interface Mutations<T> {
  [key: string]: Mutation<T>;
}

const mutations: Mutations<State> = {
  setToken(state, token: string) {
    state.token = token;
  },
  addCount(state, payload: number) {
    state.count += payload || 1;
  },
  reduceCount(state, payload: number) {
    state.count -= payload || 1;
  },
  addTodo(state, payload: Todo) {
    state.todoList.push(payload);
  },
  addTodoList(state, payload: Todo[]) {
    state.todoList = payload;
  },
  removeTodoList(state, payload: string) {
    state.todoList = state.todoList.filter(item => item.id !== payload);
  },
  updateTodoStatus(state, payload: string) {
    state.todoList.map(item => {
      if (item.id === payload) {
        item.status = !item.status;
      }
      return item;
    });
  }
};

interface Store<T = any> {
  // 箭头函数定义
  commit: (type: string, payload: any, options?: any) => void;
  // 普通函数定义
  dispatch(type: string, payload: any): void;
  state: T;
  getters: Getters<T>;
}

interface Action<Store> {
  (state: Store, payload: any): any;
}
interface Actions<Store = any> {
  [key: string]: Action<Store>;
}

const actions: Actions<Store> = {
  asyncAddCount({ commit }, payload: number) {
    commit('addCount', payload);
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {}
});
