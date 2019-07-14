<template>
  <p class="panel-block" :class="[{ 'is-active': active }]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'vb-panel-block',
  props: {
    active: Boolean
  }
};
</script>
