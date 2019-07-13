<template>
  <button
    class="delete"
    :class="[size ? 'is-' + size : '']"
    aria-label="delete"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vb-delete',
  props: {
    size: String
  }
};
</script>
