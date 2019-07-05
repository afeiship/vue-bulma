<template>
  <div @click="_click" class="columns">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-columns'
};
</script>
