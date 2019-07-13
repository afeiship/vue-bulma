<template>
  <span
    class="icon"
    :class="[color ? `has-text-${color}` : '', size ? `is-${size}` : '']"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'vb-icon',
  props: {
    color: String,
    size: String
  }
};
</script>
