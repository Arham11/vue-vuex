import { createStore } from "vuex";

let store = createStore({
  //state is any variable or data
  state: {
    count: 0,
    todos: [
      { id: 1, text: "HTML", done: true },
      { id: 2, text: "CSS", done: true },
      { id: 3, text: "JS", done: true },
      { id: 4, text: "JS Advance", done: false },
      { id: 5, text: "Vue Advance", done: false },
    ],
  },

  //mutations are use to set the data (state)
  //thats need to be done on app.vue and counter.vue
  //payload over here is the arguments passed to components using it(counter nd app)
  mutations: {
    increment(state, payload) {
      return (state.count += payload);
    },
  },

  // getters are used to update the processed value of state
  getters: {
    // the below function returns the number of todos done
    doneTodos(state) {
      return state.todos.filter((item) => item.done);
    },
    //the below function takes getters as an argument
    // (state.todos.filter((item) => item.done)) is given as (getters.doneTodos)
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
    //passing an argument(id) from another component to below funct
    // the below function will return the selected id todo's object to todolist.vue
    getTodoById: (state) => (selectedId) => {
      return state.todos.find((todo) => todo.id === selectedId);
    },
    // getTodoById: function (state) {
    //   return function (id) {
    //     return state.todos.find((todo) => todo.id === id);
    //   };
    // },
  },
  actions: {},
  modules: {},
});

export default store;
