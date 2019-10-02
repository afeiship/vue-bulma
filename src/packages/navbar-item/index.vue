<template>
  <a
    class="navbar-item"
    :class="[
      {
        'has-dropdown': dropdown
      }
    ]"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'vb-navbar-item',
  props: {
    dropdown: Boolean
  }
};
</script>
