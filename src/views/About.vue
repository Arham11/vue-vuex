<template>
  <div class="about">
    <b>Number of task done : {{ doneTaskcount() }}</b>
  </div>
</template>

<script>
export default {
  computed: {
    todosList() {
      return this.$store.state.todos;
    },
  },
  methods: {
    increment() {
      // .commit method gives access to common methods defined in store > index.js file
      // here increment method is the common method here and in countervue
      // here 2 is the argument passed to .commit method
      this.$store.commit("increment", 2);
    },
    doneTaskcount() {
      //doneTodosCount is define in store > index.js file
      //will update here and as well as at TodoList.vue
      return this.$store.getters.doneTodosCount;
    },
  },
};
</script>
