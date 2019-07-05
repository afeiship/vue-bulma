<template>
  <div id="app">
    <page-button></page-button>
    <page-columns></page-columns>
  </div>
</template>

<script>
import PageButton from './components/button';
import PageColumns from './components/columns';
export default {
  name: 'App',
  components: {
    PageButton,
    PageColumns
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
