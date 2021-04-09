<template>
  {{ $store.state.count }}
  <button @click="increment">Increment by 1</button>
</template>

<script>
export default {
  name: "Counter",
  methods: {
    increment() {
      //.commit method gives access to common methods defined in store > index.js file
      // here increment method is the common method here and in app.vue
      // here 1 is the argument passed to .commit method
      this.$store.commit("increment", 1);
    },
  },
};
</script>
