<template>
  <div id="app">
    <aside class="page-sider">
      <h2>
        <img src="https://bulma.io/images/bulma-logo.png" />
      </h2>
      <ul>
        <li v-for="item in components" :key="item">
          <router-link :to="`/${item}`">
            <i class="ion ion-ios-menu"></i>
            <span>{{ item }}</span>
          </router-link>
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
