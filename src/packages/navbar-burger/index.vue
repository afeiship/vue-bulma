<template>
  <a
    role="button"
    class="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
    :class="[{ 'is-active': active }]"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</template>

<script>
export default {
  name: 'vb-navbar-burger',
  props: {
    active: Boolean
  }
};
</script>
