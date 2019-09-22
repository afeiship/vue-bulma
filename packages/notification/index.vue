<template>
  <div class="notification" :class="[color ? 'is-' + color : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-notification',
  props: {
    color: String
  }
};
</script>
