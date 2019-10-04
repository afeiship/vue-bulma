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
      <nav class="page-navbar">
        <h3>
          <i class="ion ion-ios-pricetags" />
          <strong>NAVBAR</strong>
        </h3>
      </nav>
      <div class="page-components">
        <router-view></router-view>
      </div>
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
