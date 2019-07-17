<template>
  <div
    class="navbar-menu"
    :class="[{ 'is-active': active }, direct ? `navbar-${direct}` : '']"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-navbar-menu',
  props: {
    active: Boolean,
    direct: String
  }
};
</script>
