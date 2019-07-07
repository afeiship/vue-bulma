<template>
  <div id="app">
    <aside class="page-sider">
      <ul>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/columns">Columns</router-link>
        </li>
        <li>
          <router-link to="/box">Box</router-link>
        </li>
        <li>
          <router-link to="/content">Content</router-link>
        </li>
        <li>
          <router-link to="/delete">Delete</router-link>
        </li>
        <li>
          <router-link to="/notification">Notification</router-link>
        </li>
        <li>
          <router-link to="/progress">Progress</router-link>
        </li>
        <li>
          <router-link to="/table">Table</router-link>
        </li>
        <li>
          <router-link to="/tag">Tag</router-link>
        </li>
        <li>
          <router-link to="/title">Title</router-link>
        </li>
        <li>
          <router-link to="/subtitle">subtitle</router-link>
        </li>
        <li>
          <router-link to="/breadcrumb">breadcrumb</router-link>
        </li>
        <li>
          <router-link to="/image">image</router-link>
        </li>
        <li>
          <router-link to="/card">card</router-link>
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
