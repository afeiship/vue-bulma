<template>
  <div class="content" :class="[size ? 'is-' + size : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-content',
  props: {
    size: String
  }
};
</script>
