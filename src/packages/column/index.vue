<template>
  <div @click="_click" class="column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-column'
};
</script>
