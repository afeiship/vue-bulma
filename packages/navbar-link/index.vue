<template>
  <a
    class="navbar-link"
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
  name: 'vb-navbar-link',
  props: {
    dropdown: Boolean
  }
};
</script>
