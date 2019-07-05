<template>
  <div id="app">
    <vb-button>BUTTON</vb-button>
    <vb-button color="primary">BUTTON</vb-button>
    <vb-button color="success">BUTTON</vb-button>
    <vb-button color="warning">BUTTON</vb-button>
    <vb-button color="link">BUTTON</vb-button>
    <vb-button color="danger">BUTTON</vb-button>
    <vb-button color="info">BUTTON</vb-button>
    <vb-button loading>BUTTON</vb-button>
    <vb-button disabled>BUTTON</vb-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
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
