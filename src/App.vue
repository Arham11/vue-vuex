<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  {{ $store.state.count }} - value at app.vue
  <h4>
    Button situated at App.vue but increment the value globally by commit method
    <button class="bg-blue-100" @click="increment">Increment by 2</button>
  </h4>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  methods: {
    increment() {
      // .commit method gives access to common methods defined in store > index.js file
      // here increment method is the common method here and in countervue
      // here 2 is the argument passed to .commit method or dispatch for action to update mutation

      this.$store.dispatch("increment", 2);
    },
  },
};
</script>
