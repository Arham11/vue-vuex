<template>
  <ul>
    <li>
      <b>Number of task done : {{ doneTask() }}</b>
    </li>
    <li v-for="item in todosList" :key="item.id">
      {{ item.text }} <span v-if="item.done"> - Done</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    todosList() {
      return this.$store.state.todos;
    },
  },
  methods: {
    //doneLists is define in store > index.js file
    //will update here and as well as at About.vue
    doneTask() {
      return this.$store.getters.doneLists;
    },
  },
};
</script>

<style scoped>
li {
  text-align: left;
  list-style-type: none;
}
</style>
