<template>
  {{ $store.state.count }} - value at counter.vue
  <h4>
    Button situated at counter.vue a child compo but increment the value
    globally by commit method
    <button @click="increment">Increment by 1</button>
  </h4>
</template>

<script>
export default {
  name: "Counter",
  methods: {
    increment() {
      //.commit method gives access to common methods defined in store > index.js file
      // here increment method is the common method here and in app.vue
      // here 1 is the argument passed to .commit method
      //this.$store.commit("increment", 1);

      //dispatch for actions which will update mutations
      this.$store.dispatch("increment", 1);
    },
  },
};
</script>
