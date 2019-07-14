<template>
  <span class="panel-icon">
    <i :class="iconClass" aria-hidden="true"></i>
  </span>
</template>

<script>
export default {
  name: 'vb-panel-icon',
  props: {
    iconClass: String
  }
};
</script>
