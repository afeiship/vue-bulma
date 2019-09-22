<template>
  <p class="subtitle" :class="['is-' + this.level]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'vb-subtitle',
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};
</script>
