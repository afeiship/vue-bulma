<template>
  <div
    class="navbar-dropdown"
    :class="[{ 'is-active': active }]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-navbar-dropdown',
  props: {
    active: Boolean,
    direct: String
  }
};
</script>
