<template>
  <a class="delete" :class="[size ? 'is-' + size : '']">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'vb-delete',
  props: {
    size: String
  }
};
</script>
