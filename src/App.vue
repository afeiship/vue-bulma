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
html,
body,
#app {
  height: 100%;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;

  .router-link-exact-active {
    color: #007aff;
    text-decoration: underline;
  }

  .page-sider {
    background: #eee;
    border-right: 2px solid #ccc;
    padding: 10px;
    width: 200px;
  }
  .page-container {
    padding: 10px;
    flex: 1;
  }
}
</style>
