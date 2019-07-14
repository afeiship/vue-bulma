<template>
  <div class="tabs">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[{ 'is-active': activeIndex === index }]"
        @click="change(index)"
      >
        <a>
          <vb-icon v-if="item.icon" size="small">{{ item.icon }}</vb-icon>
          <span>{{ item.text || item }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vb-tabs',
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
