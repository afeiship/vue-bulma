<template>
  <section class="tabs-list">
    <header
      class="tabs tabs__header"
      :class="[
        {
          'is-fullwidth': fullwidth
        },
        size ? `is-${size}` : '',
        align ? `is-${align}` : '',
        styled ? `is-${styled}` : '',
        styled === 'toggle-rounded' ? 'is-toggle' : ''
      ]"
    >
      <li
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ 'is-active': index === activeIndex }"
      >
        <a :href="item.href" @click="change(index, item)">{{ item.title }}</a>
      </li>
    </header>

    <div class="tabs__body">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'vb-tabs',
  props: {
    size: String,
    align: String,
    styled: String,
    fullwidth: Boolean,
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    change(inIndex, inItem) {
      this.tabs.forEach((item, index) => {
        item.active = item.title === inItem.title;
      });
      this.$emit('update:activeIndex', inIndex);
    }
  }
};
</script>
