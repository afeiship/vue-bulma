<template>
  <div
    class="navbar-item"
    :class="[
      {
        'has-dropdown': dropdown
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-navbar-item',
  props: {
    dropdown: Boolean
  }
};
</script>
