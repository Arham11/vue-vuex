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

  //mutations basically handles out the common execution
  //thats need to be done on app.vue and counter.vue
  //payload over here is the arguments passed to components using it(counter nd app)
  mutations: {
    increment(state, payload) {
      return (state.count += payload);
    },
  },
  // getters are used to update the processed value of state
  // the below js return the number of todos done
  getters: {
    doneLists(state) {
      return state.todos.filter((item) => item.done).length;
    },
  },
  actions: {},
  modules: {},
});

export default store;
