import { createStore } from "vuex";

export default createStore({
  //state is any variable or data
  state: {
    count: 0,
  },

  //mutations basically handles out the common execution
  //thats need to be done on app.vue and counter.vue
  //payload over here is the arguments passed to components using it(counter nd app)
  mutations: {
    increment(state, payload) {
      return (state.count += payload);
    },
  },
  actions: {},
  modules: {},
});
