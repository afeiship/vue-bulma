<template>
  <ul class="menu-list">
    <li v-for="item in items" :key="item.value">
      <vb-menu-label>{{ item.label }}</vb-menu-label>
      <a :class="{ 'is-active': item.active }">{{ item.text }}</a>
      <vb-menu-list v-if="item.children" :items="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'vb-menu-list',
  props: {
    items: Array
  }
};
</script>
