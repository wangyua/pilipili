<template>
  <div id="app">
    <tabbar />
  </div>
</template>

<script>
import tabbar from './components/tabbar.vue'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
