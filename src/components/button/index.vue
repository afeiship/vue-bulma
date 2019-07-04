<template>
  <button @click="click1" class="vb-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'vb-button',
  methods: {
    click1() {
      console.log('clicked!');
    }
  }
};
</script>
