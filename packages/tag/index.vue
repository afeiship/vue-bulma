<template>
  <span
    class="tag"
    :class="[
      color ? 'is-' + color : '',
      size ? 'is-' + size : '',
      {
        'is-rounded': rounded,
        'is-delete': deleteble
      }
    ]"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'vb-tag',
  props: {
    color: String,
    size: String,
    rounded: Boolean,
    deleteble: Boolean
  }
};
</script>
