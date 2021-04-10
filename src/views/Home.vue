<template>
  <div class="home"></div>
  <Counter />
  <TodoList />
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    Counter,
    TodoList,
  },
};
</script>
