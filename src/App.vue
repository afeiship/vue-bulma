<template>
  <div id="app">
    <page-button></page-button>
  </div>
</template>

<script>
import PageButton from './components/button.vue';
export default {
  name: 'App',
  components: {
    PageButton
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
