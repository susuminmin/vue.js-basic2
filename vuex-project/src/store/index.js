import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodobyId: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: { // mutation handler function 은 Synchronous 해야 한다
    // state 를 첫번째 argument 로 받는다
    increment(state, n) {
      state.count += n;
    },
    incrementPayload(state, payload) {
      state.count += payload.amount;
    }
  },
  actions: { // actions commit mutations
    // actions 는 context object 를 첫번째 인자로 받는다. 
    // context.commit(...), context.state, context.getters 등 활용 
    increment (context) {
      context.commit("increment")
    } // Actions are triggered with the store.dispatch method:
  },
  modules: {}
});

// Add new properties to an Object: 
// 1. Vue.set(obj, 'newProperty', 123)
// 2. state.obj = {...state.obj, newProperty: 123}