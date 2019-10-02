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
      <ul>
        <li
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ 'is-active': index === activeIndex }"
        >
          <a :href="item.href" @click="change(index)">{{ item.title }}</a>
        </li>
      </ul>
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
  mounted() {
    this.tabs = this.$children;
    this.tabs[this.activeIndex].active = true;
  },
  methods: {
    change(inIndex) {
      this.tabs.forEach((item, index) => (item.active = inIndex === index));
      this.$emit('update:activeIndex', inIndex);
    }
  }
};
</script>
