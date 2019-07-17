<template>
  <div class="tab" :class="{ 'is-active': active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-tab',
  props: {
    active: Boolean,
    title: String
  }
};
</script>
