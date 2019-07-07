<template>
  <span class="tags" :class="[size ? 'are-' + size : '', {
    'has-addons':addons
  }]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'vb-tags',
  props: {
    size: String,
    addons: Boolean
  }
};
</script>
