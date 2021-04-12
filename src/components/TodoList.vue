<template>
  <ul>
    <li>
      <b>Number of task done : {{ doneTaskcount }}</b>
    </li>
    <li v-for="item in todosList" :key="item.id">
      <a @click.prevent="onTodoSelected(item.id)" class="cursor-pointer">
        {{ item.text }} <span v-if="item.done"> - Done</span>
      </a>
    </li>
  </ul>
  <h3 title="the function is call inside another Getter Methods">
    List of done todos
  </h3>
  <ul>
    <li v-for="item in doneTodosList" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
  <div v-if="todo">
    <h3 title="updated in store also">Selected TODO's</h3>
    <div>id: {{ todo.id }}</div>
    <div>text: {{ todo.text }}</div>
    <div>done: {{ todo.done }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoList",
  computed: {
    todosList() {
      return this.$store.state.todos;
    },
    //doneTodosCount is define in store > index.js file
    //will update here and as well as at About.vue
    doneTaskcount() {
      return this.$store.getters.doneTodosCount;
    },

    doneTodosList() {
      return this.$store.getters.doneTodos;
    },

    // this function will send selectedId for a particulat todo which is clicked on onTodoSelected
    // once the selected value is sent to store the getter will return the selected todo object
    todo() {
      return this.$store.getters.getTodoById(this.selectedId);
    },
  },
  methods: {
    onTodoSelected(id) {
      this.selectedId = id;
      console.log(this.todo);
    },
  },
  setup() {
    let selectedId = ref(0);
    return {
      selectedId,
    };
  },
};
</script>

<style scoped>
li {
  text-align: left;
  list-style-type: none;
}
</style>
