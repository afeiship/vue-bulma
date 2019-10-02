<template>
  <div class="panel-tabs">
    <a
      v-for="(item, index) in items"
      :key="index"
      :class="[{ 'is-active': activeIndex === index }]"
      @click="change(index)"
      >{{ item }}</a
    >
  </div>
</template>

<script>
export default {
  name: 'vb-panel-tabs',
  props: {
    items: Array,
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    change(inIndex) {
      this.$emit('update:activeIndex', inIndex);
    }
  }
};
</script>
