<template>
  <div class="tab" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vb-tab',
  props: {
    title: String
  },
  data() {
    return {
      active: false
    };
  }
};
</script>
