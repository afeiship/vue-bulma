<template>
  <div id="app">
    <aside class="page-sider">
      <ul>
        <li v-for="item in components" :key="item">
          <router-link :to="`/${item}`">{{ item }}</router-link>
        </li>
      </ul>
    </aside>
    <section class="page-container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>

<style lang="scss">
@import './assets/app.scss';
</style>
