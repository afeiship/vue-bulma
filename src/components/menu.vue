<template>
  <section class="page-menu">
    <vb-menu>
      <vb-menu-list :items="menuItems" />
    </vb-menu>
  </section>
</template>

<script>
export default {
  name: 'page-menu',
  data() {
    return {
      menuItems: require('../assets/data/menu.json')
    };
  }
};
</script>
